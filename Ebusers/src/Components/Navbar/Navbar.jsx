import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/file (1).png";
import "./Navbar.css";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <Link to="hero" smooth="true" offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Programs" smooth="true" offset={-275} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth="true" offset={-100} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth="true" offset={-300} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth="true" offset={-250} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth="true"
            offset={0}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <i className="fas fa-bars menu-icon"></i>
    </nav>
  );
};

export default Navbar;
