import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {


    const [joke, setJoke] = useState(null);


    useEffect(() => {
      axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(res => {
        console.log(res.data);
        setJoke(res.data)
      })

    }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes</h1>
        <ol>
          {
           joke ? joke.map((item) => <li key={joke.id}>{item.id.jokes}</li> ) : <li>LOADING...</li>
          }
        </ol>
      </header>
    </div>
  );
}

export default App;
