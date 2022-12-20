import boxes from "./boxes";
import React from "react";
import "./style.css"
export default function Box1(props){
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */

let [box , setBoxes] = React.useState(boxes);
   
const DarkMode = {
  backgroundColor: props.darkMode ? "black" : "white",
};



const handleClick = (item) =>{

  let newBox  = box.map((obj) =>{
    if(obj.id === item.id){
      
        return ({
            id : obj.id,
            on : !obj.on
        })
    }
        else{
            return obj;
        }
    
   
 })

  setBoxes([...newBox])
  
}

 let val = box.map((item) => {
    return <div className={item.on ? "box1" :  "box2"} key={item.id}  onClick ={()=>handleClick(item)} >{item.id}</div>;
  });


  return <main >{val}</main>;
}