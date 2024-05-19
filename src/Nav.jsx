import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/toDoList">ToDoList</Link>
        </li>
        <li>
          <Link to="/count">Count</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
