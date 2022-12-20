import Box1 from "./component/Box1";
import Box2 from "./component/Box2";
import React from "react";
import boxes from "./component/boxes";
function App() {
  const [squares, setSquares] = React.useState(boxes)
  return (
    <div className="App">
      {/* <Box1 darkMode={true}></Box1> */}
      {squares.map(square => ( 
      < Box2 key={square.id} on={square.on} /> ))
      }

    </div>
  );
}

export default App;
