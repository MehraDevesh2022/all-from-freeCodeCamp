export default function Hero(){
    return (
      <>
        <section>
          <img
            src={require("./images/photo-grid.png")}
            alt="img"
            className="hero-img"
          />

          <h1 className="hero-heading">Online Experiences</h1>
          <h5 className="hero-text">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </h5>
        </section>
      </>
    );
     
    
}