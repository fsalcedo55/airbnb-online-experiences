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
        key={cardData.id}
        cardData={cardData}
        // title={cardData.title}
        // price={cardData.price}
        // rating={cardData.stats.rating}
        // reviewCount={cardData.stats.reviewCount}
        // country={cardData.location}
        // img={cardData.coverImg}
        // openSpots={cardData.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cardElements}</section>
    </div>
  );
}
