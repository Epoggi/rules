import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

//Parsing
function parseRules(data) {
  const regexRules = /^(\d+\.\d+[\w]?[.]?)\s(.*)/gmi;
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
    matches.push({ number: match[1], text: match[2] });
    match = regexChapters.exec(data);
  }
  return matches
}


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);
  const [display, setDisplay] = useState([]);
  const [selected, setSelected] = useState(1);
  const fileurl = 'mgtrules.txt'

  //Fetch the rules.txt need to ask permission at "https://cors-anywhere.herokuapp.com/corsdemo"
  useEffect(() => {
    //fetch(`https://cors-anywhere.herokuapp.com/https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt`)
    fetch(fileurl)
    .then(res => res.text())
      .then( text => {
          setIsLoaded(true);
          //rules and chapters, through parsing functions with their own regex's, separate relevant information from .text
          setRules(parseRules(text));
          setChapters(parseChapters(text));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

//Setting up display state
  useEffect(() => {
    setDisplay(rules)
  }, [rules])

  
//Chapter components
  const TableOfContents = ({ chapters }) => {
    TableOfContents.propTypes = {
      chapters: PropTypes.array
    }

    return (
      <div style={{ height: '93vh', overflow: 'auto' }} >
        <p style={{paddingLeft:15}}>Table of Contents</p>
        <List>
          {chapters.map(chapter => <Chapter chapter={chapter} key={chapter.number} />)}
        </List>
      </div>
    )
  }

  const Chapter = ({ chapter }) => {
    Chapter.propTypes = {
      chapter: PropTypes.object
    }
    return (
      <ListItem button
        onClick={() => filterChapter(chapter.number)}
        selected={selected === chapter.number}>
        <ListItemText primary={chapter.number + " " + chapter.text} /></ListItem>
    )
  }

//Filtering the rules according to ToC
  const filterChapter = (number) => {
    setSelected(number)
    if (number >= 100){
    setDisplay(rules.filter(rules => rules.number.slice(0, 3) == number))}
  }

  
//Rule components
  const Rule = ({ rule }) => {
    Rule.propTypes = {
      rule: PropTypes.object
    }
    return (
      <ListItem>
        <ListItemText primary={rule.number + " " + rule.text} />
      </ListItem>
    )
  }

  const ListOfRules = ({ rules }) => {
    ListOfRules.propTypes = {
      rules: PropTypes.array
    }
    return (
      <div style={{ height: '100vh', overflow: 'auto' }} >
        <p style={{paddingLeft:15}}>Rules</p>
        <List>
          {rules.map(rule => <Rule rule={rule} key={rule.number} />)}
        </List>
      </div>
    )
  }

//Search components
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    searchFilter()
  }

  const searchFilter = () => {
    setDisplay(rules.filter(rules => rules.text.toLowerCase().includes(value.toLowerCase())))
  }

//Possible returns
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <form onSubmit={e => { e.preventDefault(); }}
               style={{paddingTop:10, paddingLeft:15}}
            >
              <TextField
                value={value}
                onChange={handleChange}
                variant="outlined"
                label="Search Rules"
                placeholder="For example 'Command'"
                size="small">
              </TextField>
            </form>
            <TableOfContents chapters={chapters} />
          </Grid>
          <Grid item xs={9}>
            <ListOfRules rules={display} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
