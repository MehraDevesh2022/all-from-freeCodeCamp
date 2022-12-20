import Box1 from "./component/Box1";
import Box2 from "./component/Box2";
import Box3 from "./component/Box3";
import React from "react";
import boxes from "./component/boxes";
import jokesData from "./component/jokesData";
import Joke from "./component/Joke1";
import AndOptr from "./component/AndAndOptr";
import AndAndOptr2 from "./component/AndAndOptr2";
import Form from "./component/Form";
function App() {
  // const [squares, setSquares] = React.useState(boxes)



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
              />
              ) )} */}


      {/* And opt1 */}
       {/* <AndOptr/>  */}

      {/* And optr challenge2 */}
       {/* <AndAndOptr2 /> */}


<Form/>

    </div>
  );
}

export default App;
