import React from 'react'


function SingleColor({rgb , hexColor ,  weight , index }) {
  console.log(index);
 const [alert , setAlert] = React.useState(false);
  // chnage the rgb array into the string for using them as rgb valuses
   const backRoundColor = rgb.join(',');
    // convert hexColor values as hex values parameter using #
   const hexValue = `#${hexColor}`;

   React.useEffect(() => {
     let cleanTime  = setTimeout(() =>{
         setAlert(false);
     } ,3000)
     return() =>{
      clearTimeout(cleanTime)
     }
   }, [alert])

 return (
   <article
     className={`color ${index > 10 && `color-light`}`}
     style={{ backgroundColor: `rgb(${backRoundColor})` }}
     onClick={() => {
       setAlert(true);
       // now copy the hex Code value
       navigator.clipboard.writeText(hexValue);
     }}
   >
     <p className="percent-value">{weight}%</p>
     <p className="color-value">{hexValue}</p>
     {alert && <p className="alert">copied to clipboard</p>}
   </article>
 );
}

export default SingleColor