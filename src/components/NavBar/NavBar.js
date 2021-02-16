import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const navBar = () => {
  return (
    <ul className={classes.NavContainer}>
      <li>
        <NavLink to="/" exact className={classes.NavBrand}>
          ClearBill
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          exact
          activeClassName={classes.activeLink}
          className={classes.NavLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/doc"
          // activeClassName={classes.activeLink}
          className={classes.NavLink}
        >
          Doc
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          exact
          activeClassName={classes.activeLink}
          className={classes.NavLink}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default navBar;
