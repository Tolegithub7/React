import "./Testimonials.css";
import nexticon from "../../assets/next-icon.png";
import backicon from "../../assets/back-icon.png";
// import user1 from "../../assets/user-1.jpeg";
// import user2 from "../../assets/user-2.jpg";
// import user3 from "../../assets/user-3.jpg";
// import user4 from "../../assets/user-4.jpeg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={nexticon} alt="" className="next-btn" />
      <img src={backicon} alt="" className="back-btn" />
      {/* <img src={user1} alt="" />
      <img src={user2} alt="" />
      <img src={user3} alt="" />
      <img src={user4} alt="" /> */}
      <div className="slider"></div>
    </div>
  );
};

export default Testimonials;
