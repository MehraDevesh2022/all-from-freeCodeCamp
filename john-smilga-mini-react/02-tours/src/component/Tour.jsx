import React ,{useState} from "react";
export default function Tour(props){
    const [readMore , setReadMore] =useState(true)
    return (
      <article className="single-tour">
        <img src={props.image} alt="tour - image" />
        <footer>
          <div className="tour-info">
            <h4>{props.name}</h4>
            <h4 className="tour-price">${props.price}</h4>
          </div>
          <p>
            {readMore ==true ? props.info : `${props.info.substring(0 , 180)}........` }
            <button onClick={() => setReadMore(!readMore)}>{readMore ? 'readMore' : 'showLess'}</button>
            </p>
          <button onClick={() => props.deleteHandler(props.id)} className ="delete-btn">Not intreseted</button>
        </footer>
      </article>
    );
}