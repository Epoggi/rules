import { useState, useEffect } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

function parseRules(data) {
  const regexRules = /^(\d+\.\d+[\w]?[\.]?)\s(.*)/gmi;
  var matches = [];
  var match = regexRules.exec(data);
  while (match != null) {
    matches.push({ number: match[1], text: match[2] });
    match = regexRules.exec(data);
  }
  return matches;
}
function parseChapters(data) {
const regexChapters = /^\r\n(\d+)\.\s(.*)\r\n$/gm;
var matches = [];
var match = regexChapters.exec(data);
while (match != null) {
  matches.push({ number: match[1], text: match[2]});
  match = regexChapters.exec(data);
}
return matches
}
async function fetchData() {
  
}


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);
  const [mixed, setMixed] = useState([]);

  //Fetch the rules.txt need to ask permission at "https://cors-anywhere.herokuapp.com/corsdemo"
  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt`)
      .then(res => res.text())
      .then(
        (fetchData) => {
          setIsLoaded(true);
          //rules and chapters, through parsing functions with their own regex's, separate relevant information from .text
          setRules(parseRules(fetchData));
          setChapters(parseChapters(fetchData));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      //After states are filled, mix the chapters and rules into a single list
  }, [])

  useEffect(() => {
    if (chapters.length > 0) {
      chaptersAndRules(chapters, rules)
    }

  }, [chapters, rules])

  const chaptersAndRules = (chapters, rules) => {
    console.log("first chapter: " + chapters[0])
    console.log("first rule: " + rules[0])
    var mixed = [];
    for (var i = 0; i < chapters.length; i++) {
      mixed.push(chapters[i])
  
      for (var i2 = 0; i2 < rules.length; i2++){
        
        if (chapters[i].number == rules[i2].number.slice(0,3)) {
          mixed.push(rules[i2])
        }
      }
    }
    setMixed(mixed)
  }

  
  function renderRow(props) {
    const { number, text } = props;

    return (
      <ListItem button key={number}>
        <ListItemText primary={number + " " + text}/>
      </ListItem>
    );
  }

  //Possible returns
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <FixedSizeList height={300} width={200} itemSize={30} itemCount={10}>
          {renderRow}
        </FixedSizeList>
        <Grid container spacing={3}>
          <Grid item xs={6}>
        <p>Chapters</p>
        <List>
      {chapters.map(item=> (
            <ListItem key={item.number}>
              {item.number} {item.text}
            </ListItem>
          ))}
        </List>
          </Grid>
          <Grid item xs={6}>
        <p>Rules</p>
        <List>
      {mixed.map(item=> (
            <ListItem key={item.number}>
              {item.number} {item.text}
            </ListItem>
          ))}
        </List>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
