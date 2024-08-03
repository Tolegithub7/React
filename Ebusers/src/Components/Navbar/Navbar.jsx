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
          <Link to="Programs" smooth="true" offset={0} duration={500}>
            Program
          </Link>
        </li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
