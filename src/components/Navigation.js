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
        <Link to="#" className="nav-link">
          About
        </Link>
        <Link to="#" className="nav-link">
          Movies
        </Link>
      </div>
    </nav>
  );
}
export default Navigation;
