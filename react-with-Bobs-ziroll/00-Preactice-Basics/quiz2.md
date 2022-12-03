Quiz!

1. What is a React component?


2. What's wrong with this code?
   function myComponent() {
   return (
   <small>I'm tiny text!</small>
      )
   }


3. What's wrong with this code?
function Header() {
return (
<header>
<nav>
<img src="./react-logo.png" width="40px" />
</nav>
</header>
)
}
ReactDOM.render (Header().document.getElementById("root"))


** solution :

Quiz!
1. What is a React component?
Ans : A function that return react element(ui).its basically a jsx and return as js object form converted by ReactDOM for render ui in browser screen .
       also its reuseable ..

2. What's wrong with this code?

function MyComponent() {
return (
<small>I'm tiny text!</small>
)
Ans : use function name PascalCase(MyComponent) inttead of camelCase(myComponent)
 
}
3. What's wrong with this code?

function Header() {
return (
<header>
<nav>
<img src="./react-logo.png" width="40px" />
</nav>
</header>
)
}
ReactDOM.render (</Header>.document.getElementById("root"))
Ans : use </Header> instaed of Header()