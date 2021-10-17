import React from "react";
import { Link } from "react-router-dom";
import "./navstyle.css";

function Nav() {
  console.log("The PaperDoll component has loaded successfully!");
  return (
    <div className="nav-style-control">
      <ul className="flex">
        <li className="m-6">
          <Link to="/" className="text-gray-200 hover:text-yellow-500">
            Home
          </Link>
        </li>
        <li className="m-6">
          <Link to="/about" className="text-gray-200 hover:text-yellow-500">
            About
          </Link>
        </li>
        <li className="m-6">
          <Link to="/dashboard" className="text-gray-200 hover:text-yellow-500">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
