import React from "react";
import logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="airbnb-logo" className="airbnb-logo" />
    </div>
  );
}
