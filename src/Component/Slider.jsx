import Booki from "../Assets/Booki-screen.webp";
import OhMyFood from "../Assets/OhMyFood-screen.webp";
import LaPanthere from "../Assets/LaPanthere-screen.webp";
import Kanap from "../Assets/Kanap-screen.webp";
import Piiquante from "../Assets/Piiquante-screen.webp";
import Kasa from "../Assets/Kasa-screen.webp";

function Slider() {
  return (
    <div className="slider-container">
      <div className="slider">
        <img src={Booki} alt="project screen" />
        <img src={OhMyFood} alt="project screen" />
        <img src={LaPanthere} alt="project screen" />
        <img src={Kanap} alt="project screen" />
        <img src={Piiquante} alt="project screen" />
        <img src={Kasa} alt="project screen" />
        <img src={Booki} alt="project screen" />
      </div>
    </div>
  );
}
export default Slider;
