import React, { useState } from "react";
import "../src/navbar.css";
import { Link } from 'react-router-dom'
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
             TRAVERSE
          </Link>
      <ul className={active}>
        <li className="nav__item">
        <Link to='/' className="nav__item">
             Ana Sayfa
          </Link>
        </li>
        <li className="nav__item">
        <Link to='/' className="nav__item">
             Profil
          </Link>
        </li>
        <li className="nav__item">
        <Link to='/map' className="nav__item">
             Harita
          </Link>
        </li>
        <li className="nav__item">
        <Link to='/t' className="nav__item">
             TPAGE
          </Link>
        </li>
        <li className="nav__item">
          <Link to='/news' className="nav__item">
            NEWS
          </Link>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            İletişim
          </a>
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
