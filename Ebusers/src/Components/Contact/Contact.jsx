import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ecbef21c-800a-4807-aad2-d29e7689662d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
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
      {/* I want vertical line here */}
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile phone number"
            required
          />
          <label htmlFor="messaage">Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            id=""
            placeholder="Enter your message here"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            {" "}
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
