import flame from "./images/candle_flame.png";
import {useState} from "react";
import candle1 from "./images/birthday-candles-zoy (2)_03.png";
import candle2 from "./images/birthday-candles-zoy (2)_05.png";
import candle3 from "./images/birthday-candles-zoy (2)_07.png";
import candle4 from "./images/birthday-candles-zoy (2)_09.png";
import candle5 from "./images/birthday-candles-zoy (2)_11.png";
import candle6 from "./images/birthday-candles-zoy (2)_13.png";
import candle7 from "./images/birthday-candles-zoy (2)_15.png";
import candle8 from "./images/birthday-candles-zoy (2)_17.png";
import candle9 from "./images/birthday-candles-zoy (2)_19.png";
import './App.css';

const candles = [candle1, candle2, candle3, candle4, candle5, candle6, candle7, candle8, candle9];

function Candle({numcandle}) {
  return (
    <div className="candles-row">
      {candles.slice(0, numcandle).map((candleImg, i) => (
        <div className="candle-container" key={i}>
          <img src={candleImg} alt="candle" className="candle"/>
          <img 
            src={flame} 
            alt="flame" 
            style={{ animationDelay: `${i * 0.3}s` }}
            className="flame"/>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [num, setnumcandle] = useState(0);

  return (
    <div className="App">
      <h1>Happy BirthDay!</h1>
      <Candle numcandle={num}/>
      <div className="button_container1">
        <button className="button" onClick={() => setnumcandle(num + 1)}>Add Candle</button>
        <button 
          className="button" 
          onClick={() => setnumcandle(prev => Math.max(prev - 1, 0))}
        >Remove Candle</button>
      </div>
    </div>
  );
}

export default App;