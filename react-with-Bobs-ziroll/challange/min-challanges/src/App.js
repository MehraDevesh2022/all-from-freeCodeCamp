import Box1 from "./component/Box1";
import Box2 from "./component/Box2";
import Box3 from "./component/Box3";
import React from "react";
import boxes from "./component/boxes";
import jokesData from "./component/jokesData";
import Joke from "./component/Joke1";
import AndOptr from "./component/AndAndOptr";
function App() {
  // const [squares, setSquares] = React.useState(boxes)

  // joke challange :
  const [isShown, setIsShwon] = React.useState(false)

  // const isTogle = (propID)=>{
  //   let newARR  =  squares.map(item =>{
  //         //  if(item.id ===propID){
  //         //   return {
  //         //     id : item.id,
  //         //     on : !item.on
  //         //   }
  //         //  }else{
  //         //   return item;
  //         //  }

  //         return item.id  === propID ? {...item , on : !item.on} : item
  //         })

  //       setSquares([...newARR])
 
  // }


  // Joke1.jsx
  const isToggle = () => {
    setIsShwon(prvVal => !prvVal)
  }
 

  return (
    <div className="App">
      {/* box1 */}
      {/* <Box1 darkMode={true}></Box1> */}
 
       {/* box2 */}
      {/* {squares.map(square => ( 
      < Box2 key={square.id} on={square.on} /> ))
      } */}

         {/* box3 */}

     {/* {squares.map(square =>(
       <Box3 mode={square}
           Toggle={isTogle}
            key ={square.id}   />
     ))} */}

          {/* Jokes */}
     {/* {jokesData.map(joke =>(
      //  console.log(joke);
       <Joke  key = {joke.id} 
              myJoke ={joke}
              IsShown ={isShown}
              isToggle = {isToggle}
               
       />
    
    ) )} */}
    
    <AndOptr/> 

    </div>
  );
}

export default App;
