export default function Card(props){
    console.log(props.googleMapsUrl);
    return (
      <>
        <div className="main">
          <img src={props.imageUrl} alt="img" className="main-img" />
          <div className="main-content">
            <div className="main-location">
              <span className="main-mapIcon">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <span className="main-place">{props.location}</span>
              <span className="main-url">
                <a href={props.googleMapsUrl}>View on google map</a>
              </span>
            </div>
            <h1 className="main-title">{props.title}</h1>
            <div className="main-time">
              <span>{props.startDate} - </span>
              <span>{props.endDate}</span>
            </div>
            <p className="main-text">
              {props.description}
            </p>
          </div>
        </div>
        <div className="Card-line"></div>
      </>
    );
}