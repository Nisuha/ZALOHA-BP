import group from "./group-1.png";
import polygon1 from "./Polygon.png";
import React from "react";

function MainButtons () {
    return (
      <div className="frame-6">
        
        <button className="big-button big-button-2">
          <p className="text text-1">Visualize</p>
          <img src={polygon1} className="polygon" alt="" />
        </button>
        <button className="big-button">
          <p className="text">Paste Example</p>
        </button>
  
        <button className="big-button">
          <p className="text">Save Result</p>
          <img src={group} className="save" alt="" />
        </button>
      </div>
    );
}

export default MainButtons;