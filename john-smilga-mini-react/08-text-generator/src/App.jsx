import data from "./component/data"
import  "./component/style.css"
import React,{useState} from "react";
function App() {

  const [text , setText] = useState([])
  const [count , setCount] = useState(0)

 function handleSubmit(e){
       e.preventDefault();
          
       if(count <0){
        setCount(0);
       }
       if(count > data.length-1){
        setCount(() => data.length);
       }
  setText(...[data.slice(0 , count)])

 }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
        
       
   
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph :</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />  

        <button className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((str ,index) =>{
          return(
              <p key={index}>{str}</p>
          )
        })}
      </article>
    </section>
  );
}

export default App;
