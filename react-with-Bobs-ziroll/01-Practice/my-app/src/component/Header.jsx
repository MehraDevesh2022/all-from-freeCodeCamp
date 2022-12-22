import React from "react"

export default function Header(props){
  console.log(props); 
  let style = {
    background: props.mode ? "#21222A" : "#f5f5f5",
    color : props.mode ? "white" : "black"
  };
  return (
    <>
      <nav
        className={props.mode ? "dark" : ""}
        style={{ background: style.background, color: style.color }}
      >
        <img
          src={require("../component/reactjs-icon.png")}
          alt="img"
          className="nav--icon"
        />
        <h3 className="nav--icontext">ReactFact</h3>
        <h4 className="nav--text">React Course-Project 1</h4>
        {/* <button onClick={props.toggle} className = {props.mode ? "dark" : "light"}></button> */}

        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggle}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </nav>
    </>
  );
}