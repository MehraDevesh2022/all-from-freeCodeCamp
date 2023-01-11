import React  from 'react'
import ThemeContext from './themeContext'
import PropTypes from "prop-types";
function Button(props) {
 let theme = props.theme
  // using consumer 
  return (
    //1st => when we want context value used in this component every where we wanna use this component 
     //so use consumer that way
    // <ThemeContext.Consumer>
    //   {theme => (
    //     <button className={`${theme}-theme`} >
    //       Switch
    //     </button>
    //   )}
    // </ThemeContext.Consumer>

    //2nd when we don't wanna button with theme property every so then put consumer property in button property where we are renderiing it
    
     <button className={`${theme}-theme`} >Switch Theme</button>
  );
}
// it will make sure props has either dark value of light value consider only
Button.propTypes ={
  theme : PropTypes.oneOf(['Light' , "Dark"])
}

Button.defaultProps ={
  theme : "Dark"
}


export default Button