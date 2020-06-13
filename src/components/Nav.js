import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <div className="App">
      <nav>
        <ul className="nav-links">
          <Link style={navStyle} to="/contact">
            <li>Search Movies</li>
          </Link>
          <Link style={navStyle} to="/books">
            <li>Search Books</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
