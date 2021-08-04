import { useState, useEffect } from 'react';
import './App.css';

function parseRules(data) {
  const regexRules = /^(\d+\.\d+[\w]?[\.]?)\s(.*)/gmi;
  var matches = [];
  var match = regexRules.exec(data);
  while (match != null) {
    matches.push({ rule: match[1], text: match[2] });
    match = regexRules.exec(data);
  }
  return matches;
  debugger
}
function parseChapters(data) {
const regexChapters = /^\r\n(\d+)\.\s(.*)\r\n$/gm;
var matches = [];
var match = regexChapters.exec(data);
while (match != null) {
  matches.push({ number: match[1], title: match[2]});
  match = regexChapters.exec(data);
}
return matches
debugger
}
async function fetchData() {
  
}


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);
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
      .then(chaptersAndRules(chapters, rules))
  }, [])

  const chaptersAndRules = (chapters, rules) => {
    console.log("first chapter: " + chapters[0])
    console.log("first rule: " + rules[0])
    var mixed = [];
  debugger
    for (var i = 0; i < chapters.length; i++) {
      mixed.push(chapters[i])
  
      for (var i2 = 0; i < rules.length; i2++){
        console.log(rules[i2])
        
        if (chapters[i].number === rules[i2].rule.slice(0,3)) {
          mixed.push(rules[i2])
        }
      }
    }
    console.log("logging mixed list:" + mixed)
    debugger
  }
  

  //Possible returns
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <p>Chapters</p>
        <ul>
          {chapters.map(item=> (
            <li key={item.number}>
              {item.number} {item.title}
            </li>
          ))}
        </ul>
        <p>Rules</p>
        <ul>
          {rules.map(item => (
            <li key={item.rule}>
              {item.rule} {item.text}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
