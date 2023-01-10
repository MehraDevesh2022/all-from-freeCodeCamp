import React, { useState} from "react";
import GrandParent from "./Component/GrandPerent";

function App () {
  const [count, setCount] = useState(0)
//   memo
// memo lets you skip re-rendering a component when its props are unchanged


    console.log("[GP] [P] [C] [GC] APP just rendered");
    return (
      <div>
        <button onClick={() => setCount((prv) => prv + 1)}>+1</button>
        <h2>{count}</h2>
        <p>I'm the App component</p>
        <GrandParent count={count} />
        <GrandParent />
      </div>
    );
  }


export default App;
