import React from "react"

export default function Header(){
    return (
      <>
        <nav className="nav">
         
          <img src={require("../component/reactjs-icon.png")} alt="img" className="nav--icon"/>
          <h3 className="nav--icontext">ReactFact</h3>
          <h4 className="nav--text">React Course-Project 1</h4>
        </nav>
   
      </>
    );
}