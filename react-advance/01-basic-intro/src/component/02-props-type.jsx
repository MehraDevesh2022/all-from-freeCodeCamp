import React from 'react'
import PropTypes from "prop-types";

// Challenge: Add prop types for the height and width. Make at least one of them required.
// Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red".


export default function Propstype(props) {
      const {boxColor , width , height } = props
    const styles = {
      backgroundColor: boxColor,
      width: width + 'vw',
      height: height + 'vh',
    };
  return (
    <div style={styles}> box</div>
  )
}
// PropTypes  is spcify the type of props values  => validate 
Propstype.propTypes ={
  boxColor : PropTypes.string.isRequired, // is will give warning if boxColor not passed as props and type is tring reuire only
  height : PropTypes.number, // if number not available then warning occures
  width : PropTypes.number.isRequired // width must rqeuire as parameter otherwise warnings occures
}

// Propstype.defaultProps = {
//   boxColor: "blue",
//   width: "20vw",
//   height: "20vh",
// };
