import React from "react";
import photo from "../images/swimmer.jpeg";
import redstar from "../images/redstar.png";

export default function Card(props) {
  return (
    <div className="card--container">
      <img src={photo} alt="swimmer" className="card--photo" />
      <div>
        <div className="card--text">
          <div className="card--rating">
            <img src={redstar} alt="redstar" className="card--red-star" />
            <p>5.0</p>
            <p>(6)</p>
            <p> • </p>
            <p>USA</p>
          </div>
          <p>Life lessons with a Michael Phelps</p>
          <p>
            <b>From $136</b> / person
          </p>
        </div>
      </div>
    </div>
  );
}
