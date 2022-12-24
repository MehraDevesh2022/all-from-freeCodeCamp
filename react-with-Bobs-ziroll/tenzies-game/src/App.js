import Die from "./component/Die"
import React, { useState } from "react";
import { nanoid } from 'nanoid'
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
  const [myDice, setMyDice] = useState(allNewDice())
  
  function allNewDice() {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
      randomArr[i] = {
        number: Math.trunc(Math.random() * 6) + 1,
        status : false,
        id : nanoid()
      }
    }
    return randomArr;
  }

function holdId(diceId){
 setMyDice(prvDice  => prvDice.map(dice => {
  return dice.id ===diceId ? {...dice , status : !dice.status} : dice
 }))
}
function rollDice(){
 
 setMyDice(prvDice => prvDice.map(dice =>{
     if(dice.status ===true){
        return dice
     }else{
       return ({
         number: Math.trunc(Math.random() * 6) + 1,
         status: false,
         id: nanoid()
       })
     }
 }))
}

  

  let diceElm = myDice.map((diceVal, index) => (
                  <Die
                   value={diceVal.number} 
                   key={index} 
                   isFalse = {diceVal.status }
                   id = {diceVal.id}
                   holdID ={holdId}
                   />))
  return (
    <main>
      <div className="dice-container">
        {diceElm}
      </div>
      <button onClick={rollDice} className ="roll-dice">Roll</button>
    </main>
  )
}