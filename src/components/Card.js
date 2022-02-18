import React from "react";
import data from "../data";

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.cardData.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.cardData.country === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card--container">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={props.cardData.coverImg}
        alt="swimmer"
        className="card--photo"
      />
      <div>
        <div className="card--text">
          <div className="card--rating">
            <img
              src="/images/redstar.png"
              alt="redstar"
              className="card--red-star"
            />
            <p>{props.cardData.stats.rating}</p>
            <p>({props.cardData.stats.reviewCount})</p>
            <p> • </p>
            <p>{props.cardData.location}</p>
          </div>
          <p>{props.cardData.title}</p>
          <p>
            <b>${props.cardData.price}</b> / person
          </p>
        </div>
      </div>
    </div>
  );
}
