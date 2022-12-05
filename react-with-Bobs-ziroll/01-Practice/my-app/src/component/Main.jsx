import React from "react";
export default function Main(){
    return (
      <>
        <div className="main">
          <h1 className="main-heading">Fun facts about React</h1>

          <div className="main-content">
            <ul className="main-list">
              <li>Was first released in 2013</li>
              <li>was originally created by Jorden Walke</li>
              <li>Has well over 100k stars on Github</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise app, including mobile app</li>
            </ul>
            <img
              src={require("./reactjs-icon 2.png")}
              alt="img"
              className="main--icon"
            ></img>
          </div>
        </div>
      </>
    );
}
