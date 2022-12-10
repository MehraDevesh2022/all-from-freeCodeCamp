import Hero from "./component/Hero";
import Nav from "./component/Nav";
import "./component/style.css"
import "./component/style.css"
import Card from "./Card";
const image = require("./component/card1.png");
const StarImg = require("./component/Star1.png");
function App() {
  return (
    <>
<Nav/>
<Hero/>
<Card
        img={image}
        starImg={StarImg}
        rating={5.0}
        vote={6}
        text={"Life lesson with Kaite Zaferes"}
        country={".USA"}

        price={"$136"}

/>
    </>
);

}

export default App;
