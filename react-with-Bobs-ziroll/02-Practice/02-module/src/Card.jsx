export default function Card(){
    return (
      <>
        <div className="card">
          <img
            src={require("./component/card1.png")}
            alt=""
            className="card-img"
          />
          <div className="card-stats">
            <span>
              <img
                src={require("./component/Star1.png")}
                alt=""
                className="card-star"
              />
            </span>
            <span>5.0</span>
            <span className="greay card-text">(6)</span>
            <span className="greay">.USA</span>
          </div>
          <p className="card-text">Life lesson with Kaite Zaferes</p>
          <p className="card-text">
            <span className="bold">From $136 </span>/ person
          </p>
        </div>
      </>
    );
}