import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {


    const [jokes, setJokes] = useState(null);


    useEffect(() => {
      axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(res => {
        // console.log(res.data);
        setJokes(res.data)
      })

    }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes</h1>
        <ul>
          {
            jokes.map(j => <li key={j.id}>{}</li> )
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
