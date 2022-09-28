import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="darkside-div">
        <Link to="/darkside">
          <button className="darkside-btn">Dark Side</button>
        </Link>
      </div>
      <div className="lightside-div">
        <Link to="/lightside">
          <button className="lightside-btn">Light Side</button>
        </Link>
      </div>
      <div className="allchar-div">
        <Link to="/allchar">
          <button className="allchar-btn">Both</button>
        </Link>
      </div>
    </div>
  );
}
