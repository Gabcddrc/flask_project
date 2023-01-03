import './App.css';
import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';



function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [meme_url, setMeme_url] = useState("");

  function fetch_meme(){
    fetch("/meme").then(res => res.json()).then(data => {setMeme_url(data.meme_url)});
  }
  function open_image(){
    window.open(meme_url);
  }

  useEffect(() => {
    setInterval ( () => {
    fetch('/time').then(res => res.json()).then(data => 
      {setCurrentTime(data.time)
      })},  3000)
  }, []);

  useEffect(() => {
    fetch_meme()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>A meme just for you</p>

        <img src={meme_url} width='40%'height='40%' className="meme" alt="logo" />

        {/* <p>The current time is {currentTime}.</p> */}
        <p><Button variant="contained" onClick={() => {fetch_meme()}}>Get Another Meme</Button>
          <br></br>
          <br></br>
        <Button variant="contained" onClick={() => {open_image()}}>Original Image</Button>
        </p>
  
      </header>
      <body></body>

    </div>
  );
}

export default App;



