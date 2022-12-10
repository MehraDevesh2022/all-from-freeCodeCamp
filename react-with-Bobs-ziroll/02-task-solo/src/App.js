import Card from "./component/Card";
import Nav from "./component/Nav";
import "./component/style.css"
import Data from "./component/Data";
function App() {
  let cardData = Data.map((item) =>{
    return(
      <Card 
         {...item}
      />
    )
  })

  return (
    <>
    <Nav/>
    <section  className="card-list">
      {cardData}
    </section>
    </>
  );
}

export default App;
