import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

Title.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  subtitle: "Default Subtitle",
};

export default Title;
