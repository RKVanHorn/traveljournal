import React from "react";
import navImg from "../images/Fill213.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={navImg} alt="white outline of globe" className="nav-image" />
      <p className="nav-text">my travel journal.</p>
    </nav>
  );
}
