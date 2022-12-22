import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import "./component/style.css"



function App() {
  const [mode, setMode] = useState(false)



  const toggleFn = () => {
    console.log("hello");
    setMode(prv => !prv)
  }

  let style = {
    background: mode ? "#282D35" : "white",
    color: mode ? "white" : "black"
  }

  return (
    <div style={{ background: style.background, color: style.color }}>
      <Header
        mode={mode}
        toggle={toggleFn}
        />
      <Main />
    </div>
  );
}

export default App;
