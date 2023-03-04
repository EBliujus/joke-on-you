import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {


    const [joke, setJoke] = useState([]);


    useEffect(() => {
      axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(res => {
        console.log(res.data);
        setJoke(res.data.jokes.map((j, i) => ({...j, row: i})));
      })

    }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Programmer Jokes</h1>
        <ul>
          {
           joke
          ? 
          joke.map(j => <p key={j.type === 'joke'}>{j.joke}</p>)
          :
           <p>LOADING...</p>
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
