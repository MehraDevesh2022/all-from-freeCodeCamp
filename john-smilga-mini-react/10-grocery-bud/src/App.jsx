import React  ,{useEffect , useState} from "react";
import List from "./component/List";
import Alert from "./component/Alert";
import "./component/style.css"
function App() {
  const [name , setName] = useState("")
  const [alert , setAlert] = useState({show : false , msg : "" , color : ""})
  const [list  , setList] = useState([]);
  const [isEditiing , setIsEditing] = useState(false);
  const [editId , setEditId] = useState(null);
  
  
  function handleSubmit(e){
   e.preventDefault();
    console.log("hello");
    if(!name){
 // when name is empty in the from then setAlert
    }else if(name && isEditiing){
      // edit the list item

    }else{
        //setAlert for new item added and add the item into the list
        const newItem = {id : new Date().getTime().toString() , title : name};
        setList([...list , newItem]);
         setName('')
    }
  }
  
  
  return (
    <section className="section-center">
     
     <form className="grocery-from" onSubmit ={handleSubmit}>
    {alert.show &&  <Alert/>}
    
    <h3>grocery bud</h3>
         <div className="form-control">
          <input 
          type="text" 
           value={name}
           placeholder ="e.g milk"
           onChange={(e) => setName(() => e.target.value)}
          />
          <button className="submit-btn">
            {isEditiing ? 'edit' : 'submit'}
          </button>
         </div>
        </form>
        {list.length >0 && (
          <div className="grocery-container">
            <List  items ={list} />
            <button className="clear-btn">
               clear items
            </button>
          </div>
        )}
    
    </section>
  )
}

export default App;
