import React from "react";

export default function Box3(props) {
  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   *
   * Pass that function down to each of the Box components
   * and set it up so when they get clicked it runs the function
   */

   
   console.log(props.mode + " mode");

  return (
    <>
   
      <main className="main">
        <div className={props.mode.on ? "box1" : "box2"} onClick={()=>props.Toggle(props.mode.id)}>
           
          <b>Box3</b>
        </div>
      </main>
    </>
  );
}
