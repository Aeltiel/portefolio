import NavBar from "../Layout/NavBar";
import NavBarMobile from "../Layout/NavBarMobile";
import Footer from "../Layout/Footer";
import Title from "../Component/Title";
import Presentation from "../Component/Présentation";
import Reseaux from "../Component/Reseaux";
import Container from "../Component/Container";
import Button from "../Component/Button";
import Book from "../Data/book.json";
import moi from "../Assets/moi.webp";
import DiplomesDisplay from "../Component/DiplomesDisplay";
import { setInfos } from "../Reduxtore/InfoRedux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function About() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.info.infos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let info = Book;
    dispatch(setInfos(info));
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <>
        <NavBar />
        <NavBarMobile />
        <main className="aboutContainer">
          <Title title={"Prenez le temps de me connaitre"} />
          <div className="presentationContainer">
            <img className="presentation__img" src={moi} alt="Ingrid Stemer" />
            <Presentation
              title={data[0].title}
              description={data[0].description}
            />
            <Reseaux />
          </div>

          <div className="about__activities">
            <h3 className="about__activities__title">
              Mes projets et activités du moment
            </h3>
            <p className="about__activities--text">
              <span>Projet JVThèque</span> <br />
              Site internet réalisé de A à Z. La partie Backend est une API Rest
              réalisé en node.js à l'aide d'express. L'API est liée à une base
              de donnée MongoDB. La partie Frontend est réalisé avec React. Le
              site permettra de créer un compte afin de créer sa propre liste de
              Jeux Vidéos, pour ceux qui souhaite avoir un outil accessible
              partout. Ajoutez les jeux que vous avez, ou que vous souhaitez
              avoir en fonction de leur plateforme. Puis triez les selon vos
              envies. L'appli est designé en mobile first afin de faciliter
              l'intéraction mobile, pour vous aider lors de vos sessions
              shopping JV. L'appli est également disponible sur desktop pour
              votre shopping en ligne !
            </p>

            <p className="about__activities--text">
              <span>Cours React + Redux sur Udemy</span> <br />
              Pour parfaire ma compréhension et ma pratique de React et Redux
            </p>
          </div>

          <div className="about__diplome">
            <Presentation title={data[2].title} />
            {data[2].formations.map((element) => (
              <DiplomesDisplay
                key={element.id}
                image={element.image}
                title={element.title}
                ecole={element.ecole}
                date={element.date}
              />
            ))}
          </div>

          <div className="about__loisirs">
            <Presentation
              title={data[3].title}
              description={data[3].description}
            />
            {data[3].Loisirs.map((element) => (
              <Container
                key={element.id}
                id={element.id}
                title={element.title}
                description={element.description}
                image={element.image}
              />
            ))}
          </div>

          <div className="about__CV">
            <div className="about__CV--profil">
              <p>
                Vous souhaitez connaitre mon portentiel pour travailler dans
                votre entreprise ? Je vous propose de jeter un oeil sur mon
                profil AssessFirst
              </p>
              <a
                href="/DataPdf/AssestFirst_profil.pdf"
                download="Profil-AssessFirst-IS.pdf"
              >
                <Button name={"Mon profil AssessFirst"} />
              </a>
            </div>
            <div className="about__CV--text">
              <p>
                À présent que vous me connaissez un peu mieux, n'hésitez pas à
                repartir avec un petit souvenir en cliquant sur le bouton !
              </p>
              <a
                href="/DataPdf/CV_Ingrid_STEMER_CDA_Alternant1.pdf"
                download="CV-CDA-Alternance-IS.pdf"
              >
                <Button name={"Mon CV"} />
              </a>
            </div>
            <div className="about__CV--mail">
              <p>
                Et si vous souhaitez entrer directement en contact avec moi
                n'hésitez pas à mécrire un{" "}
                <span>
                  <a href="mailto:ingrid.stemer@live.fr">mail</a>
                </span>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
export default About;
