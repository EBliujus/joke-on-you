import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {


    const [joke, setJoke] = useState(null);


    useEffect(() => {
      axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(res => {
        console.log(res.data);
        setJoke(res.data.map((j, i) => ({...j, row: i})));
      })

    }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Programmer Jokes</h1>
        <ul>
          {
           joke ? joke.map(j => <li key={j.id}>{j.jokes}</li> ) : <li>LOADING...</li>
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
