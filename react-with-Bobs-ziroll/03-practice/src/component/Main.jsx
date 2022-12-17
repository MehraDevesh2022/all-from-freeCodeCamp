import memeData from "./memeData";
import React from "react";
export default function Main() {
  
  let [imgUrl, setImgUrl] = React.useState("https://i.imgflip.com/1w7ygt.jpg");
  const clickHandleImage = () => {
   let Size = memeData.data.memes.length;
    let val = Math.trunc(Math.random() * Size) + 1;
    console.log(memeData.data.memes[val].url);
         setImgUrl(prvUrl => (prvUrl= memeData.data.memes[val].url));
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
        <img src ={imgUrl} alt="" className="main-img" />
      </main>
    </>
  );
}
