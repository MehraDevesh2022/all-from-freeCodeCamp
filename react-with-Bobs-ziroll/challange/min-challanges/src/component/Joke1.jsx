import React from "react";

export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   * - Only display the punchline paragraph if `isShown` is true
   *
   */

  // joke challange :
  const [isShown, setIsShwon] = React.useState(false);

  // Joke1.jsx
  const isToggle = () => {
    setIsShwon((prvVal) => !prvVal);
  };

  return (
    <div>
      {props.myJoke.setup && <h3>{props.myJoke.setup}</h3>}
      {isShown && <p>{props.myJoke.punchline}</p>}
      <button onClick={isToggle}>
        {isShown ? `Hide punchline` : `Show Punchline`}
      </button>
      <hr />
    </div>
  );
}
