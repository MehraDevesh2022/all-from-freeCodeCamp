import React from "react";

export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   * - Only display the punchline paragraph if `isShown` is true
   */
  console.log(props);
  
  return (
    <div>
      {props.myJoke.setup && <h3>{props.myJoke.setup}</h3>}
      {props.IsShown && <p>{props.myJoke.punchline}</p>}
      <button onClick={props.isToggle}>Punchline</button>
      <hr />
    </div>
  );
}
