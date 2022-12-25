import React, { useState } from "react";
import "../src/navbar.css";
import { Link } from 'react-router-dom';
import Logo from "./traverse2.png";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to='/' className="nav__item">
             <img className="logo" src={Logo} alt="logo"></img>
      </Link>
      <ul className={active}>
        <li className="nav__item">
        <Link to='/' className="nav__item">
             Home
          </Link>
        </li>
        <li className="nav__item">
        <Link to='/map' className="nav__item">
             Map
          </Link>
        </li>
        <li className="nav__item">
        <Link to='/news' className="nav__item">
             News
          </Link>
        </li>
        <li className="nav__item">
        <Link to='/busCard' className="nav__item">
             Transport Card
          </Link>
        </li>
        <li className="nav__item">
          <Link to='/travelGuide' className="nav__item">
            Travel Guide
          </Link>
        </li>
        <li className="nav__item">
          <Link to='/error' className="nav__link">
            Profile
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
