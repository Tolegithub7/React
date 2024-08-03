import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>copyright © 2024 Ebusers, all rights reserved</p>
      <ul>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="mailto:contact@ebusers.com">Contact@Ebusers.com</a>
        </li>
        <li>
          <i className="fas fa-phone"></i>
          <a href="tel:+251955555353">+251955555353</a>
        </li>
        <li>
          <i className="fas fa-map-marker-alt"></i>
          <span>6 kilo, Addis Ababa, 1000, Ethiopia</span>
        </li>
        <li>
          <i className="fas fa-info-circle"></i>
          <a href="/about">About Us</a>
        </li>
        <li>
          <i className="fas fa-user-shield"></i>
          <a href="/privacy">Privacy Policy</a>
        </li>
        <li>
          <i className="fas fa-file-contract"></i>
          <a href="/terms">Terms of Service</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
