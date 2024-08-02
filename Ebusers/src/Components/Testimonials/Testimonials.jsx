import "./Testimonials.css";
import nexticon from "../../assets/next-icon.png";
import backicon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.jpeg";
import user2 from "../../assets/user-2.jpg";
import user3 from "../../assets/user-3.jpg";
import user4 from "../../assets/user-4.jpeg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={nexticon} alt="" className="next-btn" />
      <img src={backicon} alt="" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Duresa Guye</h3>
                  <span>Ebusers, Ethiopia</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Ebusers was one of the best
                decisions I&#39;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Tilahun Diriba</h3>
                  <span>Ebusers, Ethiopia</span>
                </div>
              </div>
              <p>
                Choose to pursue my degree at Ebusers was one of the best
                decisions I&#39;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Faysal Seifu</h3>
                  <span>Ebusers, Ethiopia</span>
                </div>
              </div>
              <p>
                Choose to pursue my degree at Ebusers was one of the best
                decisions I&#39;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Alpha Lencho</h3>
                  <span>Ebusers, Ethiopia</span>
                </div>
              </div>
              <p>
                Choose to pursue my degree at Ebusers was one of the best
                decisions I&#39;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
