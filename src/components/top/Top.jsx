import React from "react";
import './top.css'
import image1 from '../../assets/human.png'

function Top() {
  return (
    <main className="top__main">

      <div className="left">
        <h1>Read to Start A Successfull Life On Belief?</h1>
        <h3>
          The RedPhantom Group is a great resource for reshaping youth and
          communities toward success,with a particular emphasis on youth
          development.
        </h3>
      </div>

      <div className="right">
        <img src={image1} alt="image1"/>
      </div>

    </main>
  );
}

export default Top;
