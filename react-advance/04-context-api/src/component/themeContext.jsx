// import React from "react";

// const ThemeContext = React.createContext();
//  const {Provider , Consumer} = ThemeContext;

//  class ThemeContextProvider extends React.Component{
//    constructor(){
//     super();
//     this.state ={
//     theme : "Dark"
//    }}

//    toggleTheme =() =>{
//     this.setState(prvState =>{
//         return ({
//             theme : prvState.theme  ==="Light" ? "Dark" : "Light"
//         })
//     })
//    }

//  render(){
//    return (
//      <>
//        <Provider value={{theme : this.state.theme , toggleTheme : this.toggleTheme}}>
//         {this.props.children}
//        </Provider>
//      </>
//    );

//  }

//  }
// export {ThemeContextProvider , Consumer as ThemeContextConsumer}

// with help of function
import React from "react";
const ThemeContext = React.createContext();

const { Provider, Consumer } = ThemeContext;

function ThemeContextProvider (props){
        const [theme , setTheme] =React.useState("Light")
       function toggleTheme(){
        setTheme(prv => {
            return (
                prv === "Light" ? "Dark" : "Light"
            )
        })
       }

    return (
      <>
        <Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
          {props.children}
        </Provider>
      </>
    );
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };