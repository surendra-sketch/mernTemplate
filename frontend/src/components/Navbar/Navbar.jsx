import React, { useState } from "react";
import { CloseMenuIcon, OpenMenuIcon } from "../Icons/Icons";
import { Link } from "react-router-dom";
// import { Closeicon, Openicon } from "../../icon";
import "./style.css";

const Navbar = () => {
  const [menu, setmenu] = useState(".show");
  const [menuicon, setMenuicon] = useState(true);

  const handlenav = (e) => {
    e.preventDefault();
    if (menu === ".show") {
      document.querySelector(".links").style.height = "100vh";
      setmenu("links");
      setMenuicon(false);
    } else {
      setmenu(".show");
      setMenuicon(true);
      document.querySelector(".links").style.height = "0vh";
    }
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo-text">
          <div className="logo">
            <img src="/images/bg1.jpg" alt="" />
          </div>
          <div className="text">
            <p>Explore Daily</p>
            <span>we are here to help you</span>
          </div>
        </div>
        <div onClick={handlenav} className="links">
          <ul>
            <li onClick={handlenav}>
              <Link className="link-c" to="/">
                Home
              </Link>
            </li>
            <li onClick={handlenav}>
              <Link to="/update">Update</Link>
            </li>
            <li onClick={handlenav}>
              <Link to="/work">Work</Link>
            </li>
            <li onClick={handlenav}>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="nav-btn">
          <button onClick={handlenav}>
            {menuicon ? <OpenMenuIcon /> : <CloseMenuIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
