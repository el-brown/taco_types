import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div style={{display:'flex'}}>
    <Link to="/">Home</Link>
    <Link to ="/about">About</Link>
  </div>
);

export default NavBar;