import "./component/style.css";
import React, { useState, useEffect } from "react";
import Loading from "./component/Loding";
import Tours from "./component/Tours";

function App() {
  const  [loading , setLoading]=  useState(true)
  const [tourData, setTourData] = useState([]);

function removeCard(id){
  const newData = tourData.filter(data =>{
    return data.id !=  id
  })
  setTourData(prvData => [...newData])
}

function fetchApi (){
    setLoading(true)
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) =>{
         setTourData([...data]);
         setLoading(false);
      })
    
    
      
}

  useEffect(function () {
  fetchApi();
      
  },[]);
 
 
       if(loading === true){
         return(
          <Loading/>
         )
       }

         if(tourData.length ==0){
          return (
            <main>
              <div className="title">
                <h2>no tours left</h2>
                <button onClick={() =>fetchApi() } className ="btn">refresh</button>
              </div>
            </main>
          );
          }
          return(
            <main>

              <Tours 
              tours ={tourData}
              deleteHandler ={removeCard}
              />
            </main>
          )
         
       }
  
      
 

export default App;
