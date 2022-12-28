export default function Review(props) {

let { id, name, job, image, text } = props.userArr;
console.log(props);
// console.log(id);
//  console.log(name);
//  console.log(job);
//  console.log(image);
//  console.log(text);
    return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt="img" className="person-img" />
          <span className="quote-icon"></span>
        </div>
        <h4 className="author">{name}</h4>
        <div className="job">{job}</div>
        <div className="info">{text}</div>
        <div className="button-container">
          <button className="prev-btn" onClick={props.handlePrev}>
            pv
          </button>
          <button className="next-btn" onClick={props.handleNext}>
            nx
          </button>
        </div>
        <button className="random-btn" onClick={props.randomUser}>
          Surprise me
        </button>
      </article>
    );
}
