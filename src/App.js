import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rules, setRules] = useState();

  useEffect(() =>{
    fetch(`https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt`)
    .then(
      (result) => {
        setIsLoaded(true);
        setRules(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {rules}
      </ul>
    )
  }
}

export default App;
