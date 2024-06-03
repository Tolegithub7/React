import "./Programs.css";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";
import Program1_icon from "../../assets/program-icon-1.png";
import Program2_icon from "../../assets/program-icon-2.png";
import Program3_icon from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="Programs">
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={Program1_icon} alt="" />
          <p>Graduation degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={Program2_icon} alt="" />
          <p>Masters degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={Program3_icon} alt="" />
          <p>PHD Program</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
