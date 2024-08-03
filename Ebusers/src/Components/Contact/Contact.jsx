import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          University community.
        </p>
        <ul className="contact-list">
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
            <span>
              6 kilo, Addis Ababa <br /> 1000, Ethiopia
            </span>
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
