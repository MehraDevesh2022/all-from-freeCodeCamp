export default function Card(props) {
  console.log(props.text);
  let stock = "";

  if (props.openSpots == 0) {
    stock = "Sold out";
  } else if (props.location == "Online") {
    stock = "Online";
  }
  return (
    <>
      <div className="card">
        {stock && <div className="card-status">{stock}</div>}

        <img src={props.coverImg} alt="" className="card-img" />
        <div className="card-stats">
          <span>
            <img
              src={props.starImg}
              alt=""
              className="card-star card--stats"
            />
          </span>
          <span className="card--stats">{props.stats.rating}</span>
          <span className="greay card-text  card--stats">
            ({props.stats.reviewCount})
          </span>
          <span className="greay"> .{props.location}</span>
        </div>
        <p className="card-text">{props.title}</p>
        <p className="card-text">
          <span className="bold">From ${props.price} </span>/ person
        </p>
      </div>
    </>
  );
}
