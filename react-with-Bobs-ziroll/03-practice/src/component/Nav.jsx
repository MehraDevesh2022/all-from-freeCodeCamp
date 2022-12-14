export default function Nav(){

    return (
      <>
        <nav className="nav-bar">
         
            <img src= {require("./img/logo.png")} alt="" className="nav--img" />
            <h2 className="nav--name">Meme Generator</h2>
        
          <h4 className="nav--title" >React Course - Project 3</h4>
        </nav>
      </>
    );
}