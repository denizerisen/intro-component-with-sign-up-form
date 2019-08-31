import React from 'react';
import './css/main.css';
import ButtonTrial from './components/ButtonTrial/ButtonTrial'

function App() {
  return (
    <div className="App grid">
     <div className="hero-text">
        <h1> Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable. </p>
          <ButtonTrial/>
     </div>
    </div>
  );
}

export default App;
