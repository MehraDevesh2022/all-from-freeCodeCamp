import React, { useState, useRef, useEffect } from "react";

import { FaBars } from "react-icons/fa";
import { links, social } from "./data";

// we are practcing useRef here this project is works 2 other way as well but both 2 ways has some cons =>
// 1=> maange a toggle state and then while cliked toggle that button and use condtion rendering and show ul item while condtion is true.
// cons in this way is => animation not work bcz state mount menu bar down and while unmount baar hoes up speedly no animation works also dynmic size is not set bcz of overflow hiden
// 2=> when toggle btn cliked state true and show classes links-conatiner and show-container both classes same time set it will works with animation but while menu shoes as down bar all links are not show bcz of overflow hiden and after class adding we have only 40px height available if we want add some new link then those are not visible bcz of container size

// useRef => useRef point the ul parent .. so we can access all property of that elm so now we will set height of that elm with help of getBoundingClientRect() window property.

export default function () {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  function toggleLinks() {
    setShowLinks((prv) => !prv);
  }

  useEffect(() => {
    // getBoundingClientRect() => dom property it return all parameter of elm like height width and all
    // get the height of our nav actual require for show all links
    const  elmHeight= linksRef.current.getBoundingClientRect().height;
    console.log(showLinks);
    // if height not 0 then add that height dynamicllay'
    console.log(elmHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${elmHeight}px`;
    } else {
      // jab height 1 se kam iska mtlb we dont't have any links right now
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        {/* icon and toggler btn */}
        <div className="nav-header">
          <img
            src="https://ih1.redbubble.net/image.3849363561.3431/st,small,507x507-pad,600x600,f8f8f8.jpg"
            alt="logo-img"
            className="logo"
          />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* nav--bar links */}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {/* this way code links are not dynamic  */}
            {/* <li><a href="#">Home</a></li>
            <li><a href="#">Conatct</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Price</a></li> */}

            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {/* we are adding the links dynamicly as well if we need to add more links then no need to change code only data will change and all things good to go */}
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
