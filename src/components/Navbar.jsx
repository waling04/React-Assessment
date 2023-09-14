import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/Owner"}>Owner</Link></li>
    </ul>
  );
};

export default Navbar;
