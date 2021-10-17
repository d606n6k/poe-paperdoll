import React from "react";
import { Link } from "react-router-dom";
// import "./index.css";

function Nav() {
  console.log("The PaperDoll component has loaded successfully!");
  return (
    <div>
      <ul className="flex">
        <li className="m-6">
          <Link to="/" className="text-blue-500 hover:text-blue-800">
            Home
          </Link>
        </li>
        <li className="m-6">
          <Link to="/about" className="text-blue-500 hover:text-blue-800">
            About
          </Link>
        </li>
        <li className="m-6">
          <Link to="/dashboard" className="text-blue-500 hover:text-blue-800">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
