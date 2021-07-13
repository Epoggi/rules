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

}


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);
  const [data, setData] = useState('');
  //Fetch the rules.txt need to ask permission at "https://cors-anywhere.herokuapp.com/corsdemo"
  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt`)
      .then(res => res.text())
      .then(
        (data) => {
          setIsLoaded(true);
          //set full data into a state, maybe remove this part
          setData(data);
          //rules object is created through parseRules function which parses data into items containing rules and texts
          setRules(parseRules(data));
          console.log(rules)
          console.log(rules[0].rule + rules[0].text)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])



  //Possible returns
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <p>Open console f12</p>
      </div>
    )
  }


}

export default App;
