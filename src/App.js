import logo from './logo.svg';
import './App.css';
import React from "react";
import {useState} from "react";


function App() {

  const [output, setOutput] = useState('0');

    let minus = () => {
        let currentCount = output;
        currentCount--;
        setOutput(currentCount)
    }
    let plus = () => {
      let currentCount = output;
      currentCount++;
      setOutput(currentCount)
    }


  return (
    <div>
        <div >
          <button className='plus' onClick={plus}>+</button>
        </div>
        <div className='cont text'>
            <div className='out'>
                {output}
            </div>
        </div>
        <div >
            <button className='minus' onClick={minus}>-</button>
        </div>

    </div>
  );
}

export default App;
