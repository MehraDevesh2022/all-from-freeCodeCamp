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

// react is declractive =>  declractive mean we need to tell computer what should be done .. like in coffe shop order for coffee and thats it 
// vanila js is imparative => we need to tell computer what to do with step by step.. like making coffee by ownself from scratch

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
Challange 6 => wrap react jsx into variable =>
const Val = (
 <div>
  <h1  className ="header">hello Recat, i am in</h1>
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
  */


 /*

Challenge 8: find out what happens if we try to append JSX to our div#root using.append() instead of ReactDOM
1. Create a sample page in JSX(≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append your JSX
3. See if you can guess what will show up in the browser before running the code
4. See if you can explain what actually shows up in the browser


const Page = (
    <div>
        <h1>Hello React.com</h1>
        <h2>Hello React.com2</h2>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Page</li>
        </ul>
        </div>

)
// it returns the object . JSX is return plain object to the dom and ReactDOM compile it and convert Browser undstandable code

// const root = document.getElementById("root").append(Page) //[Oject][Object] is output

const root = document.getElementById("root").append(JSON.stringify(Page))

/* output object in string form :
{"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h1","key":null,"ref":null,"props":{"children":"Hello React.com"},"_owner":null,"_store":{}},{"type":"h2","key":null,"ref":null,"props":{"children":"Hello React.com2"},"_owner":null,"_store":{}},{"type":"ul","key":null,"ref":null,"props":{"children":[{"type":"li","key":null,"ref":null,"props":{"children":"Menu"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"About"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"Page"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}
*/



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Challenge 9: Starting from scratch, build and render the HTML for our section project. Check the Google slide for what you're trying to build.
We'll be adding styling to it later.
Hints:
  *The React logo is a file in the project tree, so you can access it by using `src="./react-logo.png" in your image element
 * You can also set the 'width` attribute of the image element just like in HTML. In the slide, I have it set to 40px 


 const project = (
      <div>
       <div className ="logo">
              <img src="../1-task-active/logo.png" width ="40%px" />
       </div>
     <h1 className>Fun fact about React</h1>
    <div className ="text">
              <ul>
                  <li>Was first released in 2013</li>
                  <li>Was orginally creadted by Jorden Walke</li>
                  <li>Is maintainde by Facebook</li>
                  <li>Powers thousands of enterprise aoos, including mobile apps</li>
                  <li>Has well over 100k stars on GitHub</li>
              </ul>
    </div>
        
      </div>
       )
       ReactDOM.render(project , document.getElementById("root"))
  */




/**
Challenge 9: =>
Part 1: Create a page of your own using a custom Page component
It should return an ordered list with the reasons why you're excited to be learning React :)
Render your list to the page

function MyPage(){
return(

    <React.Fragment>
       
       <ol>
        <li>I wanna something from my life</li>
        <li>I don't want be use less</li>
        <li>I wanna good software engineer</li>
        <li>I wanna good job as well </li>
       </ol>

    </React.Fragment>
)
}

ReactDOM.render(<MyPage/>, document.getElementById("root"))


*/
/*
Challenge 10: =>
Add a header` element with a nested `nav` element. 
Inside the `nav` include a `img` element with the image of the React logo inside (src="./react-logo.png") and make sure to set the width to something more manageable so it doesn't take up the whole screen
Add an `h1` with some text describing the page. (E.g. "Reasons I'm excited to learn React"). Place it above the ordered list. Add a footer after the list that says:
"20xx <last name here> development. All rights reserved."


function WebPage(){
  return(
    <React.Fragment>
        <header>
            <nav>
                  <img src="../1-task-active/logo.png"/>
            </nav>
        </header>
          <h1>Reasons I'm excited to learn React</h1>
        <ol>
              <li>I wanna something from my life</li>
              <li>I don't want be use less</li>
              <li>I wanna good software engineer</li>
              <li>I wanna good job as well </li>
        </ol>
          <h3> &copy; 2022 Mehra development. All rights reserved.</h3>
      </React.Fragment>
  )
}


ReactDOM.render(<WebPage />, document.getElementById("root"))

*/


/**
Mini Challenge 11:
its own component called "Header"
Move the 'header' element from WebPage into 
function WebPage(){
  return(
    <React.Fragment>
        <header>
            <nav>
                  <img src="../1-task-active/logo.png"/>
            </nav>
        </header>
          <h1>Reasons I'm excited to learn React</h1>
        <ol>
              <li>I wanna something from my life</li>
              <li>I don't want be use less</li>
              <li>I wanna good software engineer</li>
              <li>I wanna good job as well </li>
        </ol>
          <h3> &copy; 2022 Mehra development. All rights reserved.</h3>
      </React.Fragment>
  )
}

ReactDOM.render(<WebPage />, document.getElementById("root"))


******solution :
function Header(){
    return(
        <React.Fragment>
            <header>
                <nav>
                    <img src="../1-task-active/logo.png" />
                </nav>
            </header>

        </React.Fragment>
    )
}

function WebPage(){
    return(
        <React.Fragment>
           <div>
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>I wanna something from my life</li>
                    <li>I don't want be use less</li>
                    <li>I wanna good software engineer</li>
                    <li>I wanna good job as well </li>
                </ol>
           </div>
           
        </React.Fragment>
    )
}

function Footer(){
    return(
        <React.Fragment>
            <h3> &copy; 2022 Mehra development. All rights reserved.</h3> 
        </React.Fragment>
    )
}
ReactDOM.render(<div><Header/><WebPage/><Footer/></div> , document.getElementById("root"))


*/






function Header(){
    return(
        <React.Fragment>
        <nav className ="header">
                <img src="../1-task-active/logo.png" />
              <li>Price</li>
                <li>About</li>
                <li>Contact</li>
        </nav>

        </React.Fragment>
    )
}

function MainPage() {
    return (
        <React.Fragment>
            <div className ="Main">
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>I wanna something from my life</li>
                    <li>I don't want be use less</li>
                    <li>I wanna good software engineer</li>
                    <li>I wanna good job as well </li>
                </ol>
            </div>

        </React.Fragment>
    )
}


function Footer() {
    return (
        <React.Fragment>
            <h3> &copy; 2022 Mehra development. All rights reserved.</h3>
        </React.Fragment>
    )

    }


    function Parent(){
        return(
            <React.Fragment>
                <Header />,
                <MainPage />,
                <Footer />
            </React.Fragment>
        )
    }

ReactDOM.render(<div><Parent/></div>, document.getElementById("root"))