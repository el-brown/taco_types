import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navbar">
    <div className="link"><Link to="/">Home</Link></div>
    <div className="link"><Link to ="/about">About</Link></div>
  </div>
);

export default NavBar;