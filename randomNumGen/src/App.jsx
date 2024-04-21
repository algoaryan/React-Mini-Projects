import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  let [num, genNum] = useState(0);
  function genRandomNum() {
    let max = 1000000;
    let min = 0;
    genNum((num = Math.floor(Math.random() * (max - min + 1) + min)));
  }

  function genEvenNum() {
    function genEvennumber() {
      let min = 2;
      let max = 1000000;
      let number = Math.floor(Math.random() * (max - min + 1) + min);
      if (number % 2 === 0) {
        return number;
      } else {
        // Recursively call genEvennumber until an even number is generated
        return genEvennumber();
      }
    }
    // Call genEvennumber and pass its result to genNum
    genNum(genEvennumber());
  }

  function genoddNum() {
    function genoddnumber() {
      let min = 1;
      let max = 1000000;
      let number = Math.floor(Math.random() * (max - min + 1) + min);
      if (number % 2 !== 0) {
        return number;
      } else {
        return genoddnumber();
      }
    }
    genNum(genoddnumber());
  }

  return (
    <>
      <h1>Random Number Generator</h1>
      <div className="card">
        <h2 className="generatedNum">{num}</h2>
      </div>
      <div className="buttons">
        <button onClick={genRandomNum}>Generatrate Random Number</button>
        <button onClick={genEvenNum}>Generatrate Even Number</button>
        <button onClick={genoddNum}>Generatrate Odd Number</button>
      </div>
    </>
  );
}

export default App;
