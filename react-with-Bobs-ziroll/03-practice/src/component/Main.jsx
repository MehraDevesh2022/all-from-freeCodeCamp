import memeData from "./memeData";

export default function Main() {
  const clickHandle = () => {
    let Size = memeData.data.memes.length;
    let val = Math.trunc(Math.random() * Size) + 1;
          console.log(memeData.data.memes[val].url);
      
    
  };
  return (
    <>
      <main>
        <form className="from">
          <input type="text" placeholder="top text" className="form--input" />
          <input
            type="text"
            placeholder="bottom text"
            className="form--input"
          />
        </form>
        <button className="form--button" onClick={clickHandle}>
          Get a new meme image 🖼
        </button>
      </main>
    </>
  );
}
