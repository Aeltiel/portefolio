import NavBar from "../Layout/NavBar";
import NavBarMobile from "../Layout/NavBarMobile";
import Footer from "../Layout/Footer";
import Book from "../Data/book.json";
import Presentation from "../Component/Présentation";
import Slider from "../Component/Slider";
import Title from "../Component/Title";
import Container from "../Component/Container";
import Button from "../Component/Button";
import ReduxIcon from "../Assets/redux-icon.webp";
import ReactNative from "../Assets/ReactNative.webp";
import { setInfos } from "../Reduxtore/InfoRedux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.info.infos);

  useEffect(() => {
    let dataProject = Book.find((element) => element.id === "002");
    dispatch(setInfos(dataProject));
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <>
        <NavBar />
        <NavBarMobile />
        <main className="projectConatainer">
          <Title title={"Bienvenue dans ma galerie de projets !"} />

          <Presentation description={data.description} />
          <div className="project__slider">
            <Slider />
          </div>
          <div className="project__detail">
            {data.projects.map((element) => (
              <Container
                key={element.id}
                id={element.id}
                image={element.image}
                title={element.title}
                description={element.description}
                language={element.Langages}
              />
            ))}
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
export default Projects;
