import React from "react";
// import photo from "../images/swimmer.jpeg";
import redstar from "../images/redstar.png";

export default function Card(props) {
  return (
    <div className="card--container">
      <img src={props.img} alt="swimmer" className="card--photo" />
      <div>
        <div className="card--text">
          <div className="card--rating">
            <img src={redstar} alt="redstar" className="card--red-star" />
            <p>{props.rating}</p>
            <p>({props.reviewCount})</p>
            <p> • </p>
            <p>{props.country}</p>
          </div>
          <p>{props.title}</p>
          <p>
            <b>${props.price}</b> / person
          </p>
        </div>
      </div>
    </div>
  );
}
