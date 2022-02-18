import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./styles.css";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  const cardElements = data.map((cardData) => {
    return (
      <Card
        title={cardData.title}
        price={cardData.price}
        rating={cardData.stats.rating}
        reviewCount={cardData.stats.reviewCount}
        country={cardData.location}
        img={cardData.coverImg}
      />
    );
  });

  //   const cardInfo = {
  //     img: "../images/swimmer.jpeg",
  //     rating: 5.0,
  //     reviewCount: 6,
  //     country: "Slovenia",
  //     title: "Life Lessons with Michael Phelps",
  //     price: 136,
  //   };

  return (
    <div>
      <Navbar />
      <Hero />
      <div>{cardElements}</div>
    </div>
  );
}
