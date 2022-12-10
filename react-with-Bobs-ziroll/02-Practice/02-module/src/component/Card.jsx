export default function Card(props) {
  console.log(props.cards.text);
  let stock = "";

  if (props.cards.openSpots == 0) {
    stock = "Sold out";
  } else if (props.cards.location == "Online") {
    stock = "Online";
  }
  return (
    <>
      <div className="card">
        {stock && <div className="card-status">{stock}</div>}

        <img src={props.cards.coverImg} alt="" className="card-img" />
        <div className="card-stats">
          <span>
            <img
              src={props.cards.starImg}
              alt=""
              className="card-star card--stats"
            />
          </span>
          <span className="card--stats">{props.cards.stats.rating}</span>
          <span className="greay card-text  card--stats">
            ({props.cards.stats.reviewCount})
          </span>
          <span className="greay"> .{props.cards.location}</span>
        </div>
        <p className="card-text">{props.cards.title}</p>
        <p className="card-text">
          <span className="bold">From ${props.cards.price} </span>/ person
        </p>
      </div>
    </>
  );
}
