import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import TrialInfo from './components/TrialInfo/TrialInfo'
import SignUpForm from './components/Form/SignUpForm'

function App() {
  return (
    <div className="App grid">
     <div className="hero-text">
        <h1> Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable. </p>
      </div>
      <div className="form-with-cta">
        <TrialInfo/>
        <SignUpForm/>
      </div>
    </div>
  );
}

export default App;
