
export default function Card(props){
  console.log(props.starImg); 
  return (
    <>
      <div className="card">
        <img src={props.img} alt="" className="card-img" />
        <div className="card-stats">
          <span>
            <img src={props.starImg} alt="" className="card-star" />
          </span>
          <span>{props.rating}</span>
          <span className="greay card-text">({props.vote})</span>
          <span className="greay">{props.country}</span>
        </div>
        <p className="card-text">{props.text}</p>
        <p className="card-text">
          <span className="bold">From {props.price} </span>/ person
        </p>
      </div>
    </>
  );
}