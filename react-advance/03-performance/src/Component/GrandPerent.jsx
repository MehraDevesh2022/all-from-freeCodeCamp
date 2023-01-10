import React from "react";
import Perent from "./Perent";

function GrandParent(props) {
  console.log("[👴🏼]   [ ]   [ ]   [ ] rendered");
  return (
    <div>
      <p>I'm a GrandParent Component</p>
      <Perent />
      <Perent />
    </div>
  );
}

export default React.memo(GrandParent);
