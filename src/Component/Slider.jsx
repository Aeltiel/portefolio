import Kanap from "../Assets/Kanap-screen.webp";
import Piiquante from "../Assets/Piiquante-screen.webp";
import Kasa from "../Assets/Kasa-screen.webp";
import ScreenCode from "../Assets/screen-code.webp";

function Slider() {
  return (
    <div className="slider-container">
      <div className="sliders">
        <div className="slider">
          <img src={Kanap} alt="project screen" />
          <p>Kanap</p>
        </div>
        <div className="slider">
          <img src={Piiquante} alt="project screen" />
          <p>Piiquante</p>
        </div>
        <div className="slider">
          <img src={Kasa} alt="project screen" />
          <p>Kasa</p>
        </div>
        <div className="slider">
          <img src={ScreenCode} alt="project screen" />
          <p>Api Blog</p>
        </div>
        <div className="slider">
          <img src={Kanap} alt="project screen" />
          <p>Kanap</p>
        </div>
      </div>
    </div>
  );
}
export default Slider;
