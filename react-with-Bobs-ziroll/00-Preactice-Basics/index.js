/*
challange 1 : => render text on screen

ReactDOM.render(<h1>Hello React ! I am in</h1> , document.getElementById('root'));


*/

/*

challange 2 : => render multiple elm into screen 

ReactDOM.render(<h1 style ={{color : 'red' , background : "aqua" ,display :"flex" , justifyContent : "center"}}><ul><li>NAME</li><li>AGE</li><li>Contact</li></ul></h1> , document.getElementById("root"))

*/

/*
challange 3 : => render a component into screen

function MyNav(){
    
    return(
        <React.Fragment>
            <h1 style={{ width: "100%", height: "3rem", background: "aqua", margin: "0%" , paddingLeft : "2rem"}}>This is My NavBar</h1>
    </React.Fragment>

    )
}

ReactDOM.render(<MyNav/> , document.getElementById("root"));


*/

// react is declractive =>  declractive mean we need to tell computer what should be done in small step
// vanila js is imparative => we need to tell computer what to do with step by step

/*
challange 4=> write code in vanila js imparative example 
             make a elm and add it into root 
             add header class on it
             add text same we added in challange 1 

let root = document.getElementById("root");
let h1 = document.createElement("h1")
h1.classList.add("header");
root.appendChild(h1).innerText = "Hello React i am in"


*/

/*
challnge 5 => write same challange 4 code with declerative way
ReactDOM.render(<h1 className ="header">Hello React, I am in</h1> , document.getElementById("root"))


*/


/*
challange 6 => wrap react jsx into variavle =>
const Val = (
 <div>
  <h1  className ="header">hello Recat , i am in</h1>
  <p>this is Jsx</p>
</div>
)

ReactDOM.render(Val, document.getElementById("root"));

*/


/* challange 7: => Crate a  Navbar in JSX
  - Use the  semantic 'nav' elemnet as the parent wrapper
  - Have an h1 elemet with the brand name of your 'website'
  - Insert and unorder list for the other nav elements
      - Inside the 'ul' have three 'li
  for "Priceing" , "About" , and "Contact"
  
  
  */

    const nav = (
 <nav>
 <h1>Hello React.com</h1>
 <ul>
    <li>Price</li>
    <li>About</li>
    <li>Contact</li>
 </ul>
  </nav>
    )

    ReactDOM.render(nav , document.getElementById("root"));
