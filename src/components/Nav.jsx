import React, { useState } from "react";
import logo from "../img/tech time.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header" id="header">
      <nav className={`Top ${isOpen ? "open" : ""}`} id="nav">
        <img className="techy" src={logo} alt="tech time" />
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>

        <ul className={`navlist ${isOpen ? "open" : ""}`}>
          <li><a className="homie" href="#first">Home</a></li>
          <li><a href="#second">About Us</a></li>
          <li><a href="#third">Courses</a></li>
          <li><a href="#fourth">Testimonials</a></li>
          <li><a href="#fifth">Community</a></li>
          <li className="active">Enroll Now</li>
        </ul>
      </nav>
    </div>
  );
}
