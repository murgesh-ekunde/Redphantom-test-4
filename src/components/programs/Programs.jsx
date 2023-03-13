import React from "react";
import internship from "../../assets/internship.png";
import research from "../../assets/research.png";
import './programs.css'

function Programs() {
  return (
    <div className="programs__main">
      <h1>Our Programms</h1>
      <main className="programs__content">
        <div className="left__section">
          <img src={internship} alt="intership" />
          <h2>Intership</h2>
          <p>
            Career Phoenix - The World's Biggest Internship cum Training
            Program. An ideal and best platform for young people to grow and
            succeed.
          </p>
          <button>Explore More</button>
        </div>

        <div className="right__section">
          <img src={research} alt="research" />
          <h2>Research and development</h2>
          <p>
            R&D develops new knowledge. It's where we innovate, process, and
            improve product. We work on different things using trending
            technologies.
          </p>
          <button>Explore More</button>
        </div>
      </main>
    </div>
  );
}

export default Programs;
