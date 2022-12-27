import List from "./component/List";
import Data from "./component/Data";
import React ,{useState} from "react";
import "./component/style.css"



function App() {

  const [birthday, setBirthDays] = useState(Data);

  function clickHandler(){
    setBirthDays([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{birthday.length} Birthday today</h3>

        {birthday.map((bdayList) => (
          <List
            key={bdayList.id}
            name={bdayList.name}
            img={bdayList.image}
            age={bdayList.age}
          />
        ))}

        <button onClick ={clickHandler}>Clear all</button>
      </section>

    </main>
  );
}

export default App;
