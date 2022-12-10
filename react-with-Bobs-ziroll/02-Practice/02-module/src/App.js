import Hero from "./component/Hero";
import Nav from "./component/Nav";
import "./component/style.css"
import Card from "./component/Card";
import Data from "./Data";
// const starImg = require("./component/images/star.png")
function App() {
      let card  = Data.map((item)=>{
       
       return  ( <Card
         

         key={item.id}
             // using spread operator =>
             {...item}  // it will passed for all object props sapratly
         // either this way
       //  cards={item}
        // this way code become to messy so we pass direct item object as prop from array
            // img={item.coverImg}
            // starImg={starImg}
            // rating={item.stats.rating}
            // vote={item.stats.reviewCount}
            // text={item.title}
            // country={item.location}
            // price={item.price}
          />)

      }) 
 
  return (
    <>
<Nav/>
<Hero/>
   <section className="card-list">
        {card}
   </section>
 

    </>
);

}

export default App;
