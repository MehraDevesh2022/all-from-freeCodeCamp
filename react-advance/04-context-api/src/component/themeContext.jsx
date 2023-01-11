import React from "react";

const ThemeContext = React.createContext();
 const {Provider , Consumer} = ThemeContext;

 class ThemeContextProvider extends React.Component{
   constructor(){
    super();
    this.state ={
    theme : "Dark"
   }}

   toggleTheme =() =>{
    this.setState(prvState =>{
        return ({
            theme : prvState.theme  ==="Light" ? "Dark" : "Light"
        })
    })
   }

 render(){
   return (
     <>
       <Provider value={{theme : this.state.theme , toggleTheme : this.toggleTheme}}>
        {this.props.children}
       </Provider>
     </>
   );

 }

 }
export {ThemeContextProvider , Consumer as ThemeContextConsumer}
