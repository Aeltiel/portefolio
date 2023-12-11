import Kanap from "../Assets/Kanap-screen.webp";
import Piiquante from "../Assets/Piiquante-screen.webp";
import Kasa from "../Assets/Kasa-screen.webp";

function Slider() {
  return (
    <div className="slider-container">
      <div className="slider">
        <img src={Kanap} alt="project screen" />
        <img src={Piiquante} alt="project screen" />
        <img src={Kasa} alt="project screen" />
        <img src={Kanap} alt="project screen" />
      </div>
    </div>
  );
}
export default Slider;
