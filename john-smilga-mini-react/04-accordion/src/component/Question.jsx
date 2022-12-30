import React from "react"
import {
  AiOutlinePlusSquare,
  AiOutlinePlus,
  AiOutlineMinusSquare,
} from "react-icons/ai";
export default function Question(props){

   
 const [btnState , setBtnState]  = React.useState(false);
    return (
      <article className="question">
        <header>
          <h4>{props.title}</h4>
          <button
            className="btn"
            onClick={() => setBtnState((prvState) => !prvState)}
          >
            {btnState ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
          </button>
        </header>
        {btnState && <p>{props.info}</p>}
      </article>
    );
}