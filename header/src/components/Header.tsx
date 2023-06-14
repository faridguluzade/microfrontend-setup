import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h2 className="header-logo">Micro Frontend</h2>
      <p className="route">Route</p>
    </header>
  );
}

export default Header;
