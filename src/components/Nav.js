import React from 'react';
import '../App.css'
import logo from "../logo.svg"
import { Link } from 'react-router-dom';
function Nav() {
  const navStyle = {
    color: "white"
  }
  return (
    <div className="App">
      <nav >
        <ul className="nav-links">
          <Link to='/'>
            <div><img src={logo} /></div>
          </Link>

          <Link style={navStyle} to='/contact'>
            <li>Search for Movies</li>
          </Link>
          <Link style={navStyle} to='/books'>
            <li>Search for Books</li>
          </Link>

        </ul>
      </nav>
    </div>
  );
}

export default Nav;
