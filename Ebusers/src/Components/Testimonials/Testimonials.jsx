import "./Testimonials.css";
import nexticon from "../../assets/next-icon.png";
import backicon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.jpeg";
import user2 from "../../assets/user-2.jpg";
import user3 from "../../assets/user-3.jpg";
import user4 from "../../assets/user-4.jpeg";

const Testimonials = () => {
  return (
    <div>
      <img src={nexticon} alt="" className="next-btn" />
      <img src={backicon} alt="" className="back-btn" />
    </div>
  );
};

export default Testimonials;
