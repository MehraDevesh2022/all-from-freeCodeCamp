import Hero from "./component/Hero";
import Nav from "./component/Nav";
import "./component/style.css"
import Card from "./component/Card";
import Data from "./Data";

function App() {
      let card  = Data.map((item)=>{
       
       return  ( <Card
            key = {item.id}
            cards =   {item}
          />)

      }) 
 
  return (
    <>
<Nav/>
{/* <Hero/> */}
   <section className="card-list">
        {card}
   </section>
 

    </>
);

}

export default App;
