import React from 'react';
import '../App.css'
import logo from "../logo.svg"

import { Link, withRouter } from 'react-router-dom';
import { logDOM } from '@testing-library/react';
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

          <Link style={navStyle} to='/about'>
            <li>about</li>
          </Link>

          <Link style={navStyle} to='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
