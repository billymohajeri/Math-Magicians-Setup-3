import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navi.css';

const Navi = () => (
  <nav className="navmenu-desktop">
    <h1 className="logo">Math Magicians</h1>
    <ul className="nav-items">
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="quote"
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Quote
        </NavLink>
      </li>
      <li>
        <NavLink
          to="calculator"
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Calculator
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navi;
