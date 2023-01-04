import React  ,{useEffect , useState} from "react";
import List from "./component/List";
import Alert from "./component/Alert";
import "./component/style.css"
 function getLocalStorageData() {
   let mylist = JSON.parse(localStorage.getItem("list"));

   if (mylist) {
     return mylist;
   } else {
     return [];
   }
 }

function App() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", color: "" });
  const [list, setList] = useState(getLocalStorageData());
  const [isEditiing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      // when name is empty in the from then setAlert
      showAlert(true, "text is empty", "danger");
    } else if (name && isEditiing) {
      // edit the list item
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      // now set name empty
      setName("");
      // isEditing state now false then submit button will visible instead of edit in form
      setIsEditing(false);
      // id set null bceuse given id item values changed
      setEditId(null);
      // set alert
      showAlert(true, "item is modified successfully !.. ", "success");
    } else {
        showAlert(true, "item added successfully ...", "success");
      //setAlert for new item added and add the item into the list
      const newItem = { id: new Date().getTime().toString(), title: name };
      // set new item into the list
      setList([...list, newItem]);
      // set name empty
      setName("");
      // set alert
    
    }
  }

  // edit listItem first find then setName with that item and change state isEditing , setEdit
  function ediItem(id) {
    let currEditItem = list.find((item) => item.id == id);
    console.log(currEditItem);
    setName(currEditItem.title);
    setEditId(id);
    setIsEditing(true);
  }

  function clearList() {
    //set alert
    showAlert(true, "Now list is empty", "danger");
    // set list empty
    setList([]);
  }

  function removeItem(id) {
    // filter always return new array ...
    setList(list.filter((item) => item.id != id));
    // set the alert as well
    showAlert(true, "item removed from list", "danger");
  }
  // showAlert With default values if there is no parameter passed by user then autmatically deafult parameter will set

  function showAlert(show = false, msg = "", color = "") {
    console.log("showAlert" , show);
    setAlert({ show, msg, color });
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            value={name}
            placeholder="e.g milk"
            onChange={(e) => setName(() => e.target.value)}
          />
          <button className="submit-btn">
            {isEditiing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} ediItem={ediItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
