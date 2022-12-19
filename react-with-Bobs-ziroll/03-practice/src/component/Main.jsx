import memeData from "./memeData";
import React from "react";
export default function Main() {
  
  let [meme, setMeme] = React.useState({
    toptext : "",
    Bottomtext : "",
    randomImg : "https://i.imgflip.com/1w7ygt.jpg",
  });
  const clickHandleImage = () => {
   let Size = memeData.data.memes.length;
    let val = Math.trunc(Math.random() * Size) + 1;
    let url = memeData.data.memes[val].url;

         setMeme({
          ...meme,
          randomImg : url
         });
  };
  return (
    <>
      <main>
      {/* <form className="from">
          <input type="text" placeholder="top text" className="form--input" />
          <input
            type="text"
            placeholder="bottom text"
            className="form--input"
          />
        </form> */}
        <button className="form--button" onClick={clickHandleImage}>
          Get a new meme image 🖼
        </button>
        <img src ={meme.randomImg} alt="" className="main-img" />
      </main>
    </>
  );
}
