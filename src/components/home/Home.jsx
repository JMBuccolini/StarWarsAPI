import React from "react";
import NavBar from "../navbar/NavBar";
import "./styles.css";

export default function Home() {
  return (
    <div className="home_main">
      <NavBar />
      <div className="home_div">
        <h1>Este es el home</h1>
      </div>
    </div>
  );
}
