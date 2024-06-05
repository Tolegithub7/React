import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quaerat,
          placeat sint consequatur molestias quidem accusamus deleniti possimus
          doloribus rerum? Voluptatibus quod dolorum at consequatur? Sapiente
          sit asperiores odio cumque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          veniam, rem totam ipsam deserunt similique consectetur molestiae
          officiis laudantium atque optio porro ad sint. Placeat minus commodi
          eaque fugiat autem totam deserunt distinctio vero cum adipisci
          blanditiis in ea quo nemo veniam reprehenderit illum cumque doloremque
          natus, dolor, rerum quibusdam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde
          incidunt magnam eius necessitatibus delectus ex perferendis qui quia
          praesentium!
        </p>
      </div>
    </div>
  );
};

export default About;
