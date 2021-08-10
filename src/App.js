import { useState, useEffect, useRef, createRef } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, VariableSizeList } from 'react-window';
import PropTypes from 'prop-types';


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
  const [mixed, setMixed] = useState([]);
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
  
  //Mix chapters and rules into another list
  //Note: Need to study more on async code
  useEffect(() => {
    if (chapters.length > 0) {
      chaptersAndRules(chapters, rules)
      setDisplay(rules)
    }

  }, [chapters, rules])

  //Function to mix the lists
  const chaptersAndRules = (chapters, rules) => {

    var mixed = [];
    for (var i = 0; i < chapters.length; i++) {
      mixed.push(chapters[i])

      for (var i2 = 0; i2 < rules.length; i2++) {

        if (chapters[i].number == rules[i2].number.slice(0, 3)) {
          mixed.push(rules[i2])
        }
      }
    }
    setMixed(mixed)
  }
  const filterChapter = (number) => {
    console.log("Errorlol")
    setDisplay(rules.filter(rules => rules.number.slice(0, 3) == number))
  }


  // Function to scroll the list according to user
  const listRef = createRef();
  const scrollList = (item) => {
    this.listRef.current.scrollToItem(item, "center");
  }

  //Note: How to create row function with variable data?
  function renderRow(props) {
    const { index, style } = props;

    return (

      <ListItem button
        style={style}
        key={index}
        onClick={() => filterChapter(chapters[index].number)}>
        <ListItemText primary={chapters[index].number + " " + chapters[index].text} />
      </ListItem>

    );
  }
  /* Underwork, for varying row sizes on rules
  //References
    const listRef = useRef({});
    const rowHeigts = useRef({});
  
  //Evaluate row size according to item[index].text.length
    function getRowHeight(index) {
      return rowHeigts.current[index] + 8 || 82;
    }
  
    function renderRow2(props) {
      const { index, style } = props;
      const rowRef = useRef({});
  
      useEffect(() => {
        if (rowRef.current) {
          setRowHeigts(index, rowRef.current.clientHeight);
        }
      }, [rowRef]);
      
      return (
  
          <ListItem button style={style} key={index}>
            <ListItemText primary={mixed[index].number + " " + mixed[index].text} />
          </ListItem>
        
        );
    } */

  //rows for mixed list of chapters and rules
  function renderRow2(props) {
    const { index, style } = props;

    return (

      <ListItem button style={style} key={index}>
        <ListItemText primary={display[index].number + " " + display[index].text} />
      </ListItem>

    );
  }
  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };
  //Function underwork, for rules of varying sizes.
  const getItemSize = index => {
    //return a size for items[index]
    //if method: if item[index].text.length > x (return y); else if..
    //if (item[index].text.length < 15) { return 10} else if (item[index].text.length < 35) {return 30} ...
    //suggestions?
  }


  //Possible returns
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <p>Table of Contents</p>
            <FixedSizeList height={600} width='100%' itemSize={35} itemCount={chapters.length}>
              {renderRow}
            </FixedSizeList>
          </Grid>
          <Grid item xs={9}>

            <p>Rules</p>
            <FixedSizeList
              height={600}
              width='100%'
              itemSize={80}
              itemCount={display.length}
              /* ref={this.listRef} */>

              {renderRow2}
            </FixedSizeList>
          </Grid>
        </Grid>
        {/*  <VariableSizeList height={600} width='100%' itemSize={getItemSize} itemCount={mixed.length}>
          {renderRow2}
        </VariableSizeList> */}
      </div>
    )
  }
}

export default App;
