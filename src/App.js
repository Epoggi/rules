import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


//Parsing
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
  }, [])

  useEffect(() => {
      setDisplay(rules)
  }, [rules])

  const filterChapter = (number) => {
    setDisplay(rules.filter(rules => rules.number.slice(0, 3) == number))
  }

  const Chapter = ({ chapter }) => {
    return (
      <ListItem button 
      onClick={() => filterChapter(chapter.number)}>
        <ListItemText primary={chapter.number + " " + chapter.text} /></ListItem>
    )
  }

  const TableOfContents = ({ chapters }) => {
    return (
      <div style={{ height: '100vh', overflow: 'auto' }} >
        <p>Table of Contents</p>
        <List>
          {chapters.map(chapter => <Chapter chapter={chapter} key={chapter.number} />)}
        </List>
      </div>
    )
  }

  const Rule = ({ rule }) => {
    return (
      <ListItem>
        <ListItemText primary={rule.number + " " + rule.text} />
      </ListItem>
    )
  }

  const ListOfRules = ({ rules }) => {
    return (
      <div style={{ height: '100vh', overflow: 'auto' }} >
        <p>Rules</p>
        <List>
          {rules.map(rule => <Rule rule={rule} key={rule.number} />)}
        </List>
      </div>
    )
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
