import React from 'react';
import { NavLink } from 'react-router-dom';

const Navi = () => (
  <nav className="aa">
    <h1>Math Magicians</h1>
    <ul>
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
