export default function Nav(){
    return (
      <>
        <nav>
          <img
            src={require("../image/logo.png")}
            alt="img"
            className="nav-img"
          />
          <div className="nav-text">my travel journal.</div>
        </nav>
      </>
    );
}