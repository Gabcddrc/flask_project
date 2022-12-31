import './App.css';
import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [meme_url, setMeme_url] = useState("");

  useEffect(() => {
    setInterval ( () => {
    fetch('/time').then(res => res.json()).then(data => 
      {setCurrentTime(data.time)
      })},  3000)
  }, []);

  useEffect(() => {
    console.log('hello')
    fetch("/meme").then(res => res.json()).then(data => {setMeme_url(data.meme_url
      )})
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={meme_url} width='30%'height='30%' className="meme" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}.</p>
        <p><Button variant="contained" onClick={() => {console.log('hello');}}>Hello World</Button></p>
      </header>

    </div>
  );
}

export default App;



