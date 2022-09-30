import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="allchar-div">
        <Link to="/home">
          <button className="allchar-btn">ENTER TO A GALAXY FAR FAR AWAY...</button>
        </Link>
      </div>
    </div>
  );
}
