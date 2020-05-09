import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Let's go streaking!</a>
        </li>
        <NavMessage score={props.score} topScore={props.topScore} />
        <li>
          Current Streak: {props.score} | Best Streak: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;