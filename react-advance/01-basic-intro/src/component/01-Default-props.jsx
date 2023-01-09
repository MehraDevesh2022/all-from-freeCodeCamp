import React from 'react'
function Card(props) {
    const {cardColor , width , height } = props

     const styles = {
       backgroundColor: cardColor,
       width: width,
       height: height,
     };
     
   
  return (
     <>
     <div  style={styles}>Box</div>
     </>
  )


}
// if user foregt or not passed the props values then default props are used on those component
  Card.defaultProps = {
    cardColor: "aqua",
    height: "20vh",
    width: "50vw",
  };

export default Card