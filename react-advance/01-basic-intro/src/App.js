import React from "react";
import Card from "./component/01-Default-props";
import Propstype from "./component/02-props-type";
import RoundedImg from "./03-Challenge";
import './component/style.css'
function App() {
  return (
    <>
      {/* <Card cardColor = "red" width ={'26px'} height ={'37px'}/>
   <Card cardColor = "blue" width ={'30px'} height ={'40px'}/>
   <Card cardColor = "orange" />
   <Card width ={'35px'} /> */}

      {/* <PropsType boxColor ={'red'} width ={'33px'} />
     <PropsType  width ={'33px'} />
      <Propstype width ={20} height ={30}  boxColor ={'red'}/>
      <Propstype  height ={30}   boxColor ="aqua"/> */}


      <RoundedImg src="https://picsum.photos/id/237/300/300" borderRadius="10px" />

    </>
  );
}

export default App;
