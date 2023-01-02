import React ,{useState , useEffect} from "react";
import people from "./component/data";
import "./component/style.css"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
function App() {
const [data , setData] = useState(people)
const [index , setIndex] = useState(0);

  useEffect(() =>{
   let lastIdx = people.length - 1;
    if(index <0){
      setIndex(lastIdx);
    }
    if(index > lastIdx){
     setIndex(0)
    }
  },[index ,data])

  // this use effect carry clean up function as well whenever the index cliked for that all event and suscription will gone
useEffect(() =>{
 let clearId = setInterval(()=>{
       setIndex(prvIdx => prvIdx+1);
  } , 3000);
  return() => { 
    clearInterval(clearId)
  }
  
},[index])
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Review
        </h2>
      </div>

      <div className="section-center">
        {data.map((peopleObj, peopleIdx) => {
          const { id, image, name, title, quote } = peopleObj;
     
 let position = "nextSlide";      
if (index === peopleIdx) {
  position = "activeSlide";
}          
                // jo bhi idx active hoga uske just piche wala elm prv elm  ban jayega or jab idx 0 hoga tab prv elm data.length-1 hoga
          if (
           ( peopleIdx === index - 1 )||
            (index === 0 &&
            peopleIdx === data.length - 1)
          ) {
            position = "lastSlide"
          }
          

          return (
            <article key={id} className={position}>
              <img src={image} alt={title} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title} name</p>
              <p className="text">{quote}</p>
              <div className="icon"><FaQuoteRight/></div>
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => setIndex(prvIdx => prvIdx -1)}
        > <FiChevronLeft /></button>
        <button className="next" onClick={() => setIndex(prvIdx => prvIdx+1)}><FiChevronRight /></button>
      </div>
    </section>
  );
    
      }
export default App;


