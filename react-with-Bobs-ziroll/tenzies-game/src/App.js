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
  let newArr =[];
  setMyDice(prvDices => {
    prvDices.map(dice =>{
        if(dice.id ==diceId){
          newArr.push({...dice , id : nanoid.id})
        }else{
          newArr.push(dice)
        }
        return newArr
    }) 
     
    
  })
   
}
  

function rollDice(){
  setMyDice(allNewDice());
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