import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import photo from "./images/swimmer.jpeg";
import "./styles.css";

export default function App() {
  const cardInfo = {
    img: "../images/swimmer.jpeg",
    rating: 5.0,
    reviewCount: 6,
    country: "Slovenia",
    title: "Life Lessons with Michael Phelps",
    price: 136,
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Card
          img={photo}
          rating={cardInfo.rating}
          reviewCount={cardInfo.reviewCount}
          country={cardInfo.country}
          title={cardInfo.title}
          price={cardInfo.price}
        />
      </div>
    </div>
  );
}
