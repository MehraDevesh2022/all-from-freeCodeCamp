export default function Main(){
    return (
      <>
        <div className="main">
          <div className="main-input">
            <input type="text" placeholder="shutup" className="main--input" />

            <input
              type="text"
              placeholder="take a money"
              className="main--input"
            />
          </div>

          <button className="main-button">
            Get a new meme image
            <span>
              <img
                src={require("./img/button.png")}
                alt=""
                className="button-img"
              />
            </span>
          </button>
          <img src={require("./img/meme.png")} alt="" className="main-img" />
        </div>
      </>
    );
}