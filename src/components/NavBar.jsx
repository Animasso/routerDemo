import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <header>
      <ul className="nav">
        <NavLink to="/" end>
          <li>Home</li>
        </NavLink>
        <NavLink to="/productList">
          <li>Products</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </header>
  );
};
