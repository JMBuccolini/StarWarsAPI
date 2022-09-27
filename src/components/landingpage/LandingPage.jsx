import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>StarWars</h1>
      <Link to="/darkside">
        <button className="landing-btn">Dark Side</button>
      </Link>
      <Link to="/lightside">
        <button className="landing-btn">Light Side</button>
      </Link>
      <Link to="/allchar">
        <button className="landing-btn">All Characters</button>
      </Link>
    </div>
  );
}
