import React from "react";
import { Logo } from "./icons/index";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function Navigation() {
  return (
    <nav className="navbar">
      <Link className="" to="/">
        <Logo className="logo" />
      </Link>
      <SearchBox className="search-box" />
      <div className="linkler">
        <Link to="/movies" className="nav-link">
          Movies
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </nav>
  );
}
export default Navigation;
