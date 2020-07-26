import React from "react";
import { Link } from "react-router-dom";
import "./App.css"

function Navbar() {
  return (
    <div class="navborder">
    <div class="navbar">
      <Link to="/" class="nav-menu">Home</Link>
      <Link to="/about" class="nav-menu">About</Link>
      <Link to="/product" class="nav-menu">Product</Link>
    </div>
    </div>
  );
};

export default Navbar;
