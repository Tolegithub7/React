import "./About.css";
import PropTypes from "prop-types";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow&#39;s Leaders Today</h2>
        <p>
          Our university is dedicated to fostering the next generation of
          leaders through a comprehensive and innovative curriculum. We strive
          to provide students with the knowledge, skills, and experiences needed
          to excel in their chosen fields.
        </p>
        <p>
          We believe in the power of education to transform lives and
          communities. Our faculty comprises experienced educators and industry
          professionals who are passionate about teaching and mentoring
          students. With state-of-the-art facilities and a supportive learning
          environment, we ensure our students have access to the resources they
          need to succeed.
        </p>
        <p>
          Our commitment to excellence is reflected in our diverse and inclusive
          campus culture. We encourage students to think critically, engage in
          meaningful research, and contribute to society through community
          service and leadership initiatives. Join us in our mission to shape a
          brighter future for all.
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default About;
