import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/Searchbar";
import "./styles.css";

export default function NavBar() {
  return (
    <nav className="nav_container">
      <SearchBar/>
      <div className="nav_btns">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <a
          href="https://starwars.fandom.com/es/wiki/Portada"
          className="wikilink"
        >
          StarWars-Wiki
        </a>
      </div>
    </nav>
  );
}
