import "./component/style.css";
import Review from "./component/Review";
import React from "react";
import reviews from "./component/Data";
function App() {

 const [userData, setUserData] = React.useState(reviews);
const [currUser , setCurrUser] = React.useState(0);
 

console.log("one");
// handle prv button
function handlePrev(){
if(currUser ==0){
  setCurrUser(userData.length-1);
}else{
  setCurrUser(prvVal => prvVal-1)
}
}
// handle next button
function handleNext(){
  if(currUser === userData.length-1){
    setCurrUser(0);
  }else{
    setCurrUser(prvVal => prvVal+1);
  }
}

// handle random button
function randomUser(){
 let idx = Math.trunc(Math.random() * userData.length); 
 setCurrUser(idx);
}

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review
          userArr={userData[currUser]}
          handlePrev={handlePrev}
          handleNext={handleNext}
          randomUser ={randomUser}
        />
      </section>
    </main>
  );
}

export default App;
