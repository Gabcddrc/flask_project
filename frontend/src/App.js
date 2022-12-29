import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setInterval ( () => {
    fetch('/time').then(res => res.json()).then(data => 
      {setCurrentTime(data.time)
      })},  3000)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <body></body>
    </div>
  );
}

export default App;
