import Die from "./component/Die"
import React, { useState } from "react";
import "./style.css"
/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */

export default function App() {

  function allNewDice() {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
      randomArr[i] = Math.trunc(Math.random() * 6) + 1;
    }
    return randomArr;
  }

function rollDice(){
  setMyDice(allNewDice());
}

  const [myDice, setMyDice] = useState(allNewDice())

  let diceElm = myDice.map((diceVal, index) => (
                  <Die value={diceVal} key={index} />))
  return (
    <main>
      <div className="dice-container">
        {diceElm}
      </div>
      <button onClick={rollDice} className ="roll-dice">Roll</button>
    </main>
  )
}