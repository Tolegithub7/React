import React from "react";
import "./Navbar.css";
import fileImage from "/src/assets/file.png";
import logoImage from "/src/assets/Logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={fileImage} alt="" />
      <img src={logoImage} alt="" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
