export default function Nav(){
    return (
      <>
        <nav className="nav-bar">
          <div className="nav--logo">
            <img src= {require("./img/logo.png")} alt="" className="nav--img" />
            <div className="nav--name">Meme Generator</div>
          </div>
          <div className="nav--title">React Course - Project 3</div>
        </nav>
      </>
    );
}