import "./component/style.css"
import SingleColor from "./component/SingleColor";
import React ,{useState , useEffect} from "react";
// used for genreate hex color diffrent values
import Values from 'values.js'



function App() {
const [color , setColor] = useState('');
const [error , setError] = useState(false);
const [list , setList] = useState(new Values('#800080').all(5));

function handleSubmit(e){
   e.preventDefault();
   try{
             // this will return set color array data for hex color and other paramenter its given by by values.js library
        let  colors  = new Values(color).all(10);
        setList(colors);
        console.log(list);
   }catch(err){
    setError(err);
    console.log(err);
   }
}

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(() => e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
<section className="colors">
  {list.map((color , idx) =>(
    <SingleColor 
    key={idx}
    {...color}
    index ={idx}
    hexColor ={color.hex}
    />
  ))}
</section>

    </>
  );
}

export default App;
