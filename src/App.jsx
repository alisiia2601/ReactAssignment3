import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  const handleClick = () => {
    generateRandomNumber();
  };

  return (
    <div>
      <div id="container">
        <div className="center">
          <h1>
            <span>Random Number Generator</span>
            <span>Random Number Generator</span>
            <span>Random Number Generator</span>
          </h1>
        </div>
        <p className="textUpper">Click here to generate a random number from 1 to 100:</p>
        <button id="generate-button" onClick={handleClick}>Generate</button>
        <p id="result">{number}</p>
      </div>
    </div>
  );
}

export default App;
