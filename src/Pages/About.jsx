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
import LogoOC from "../Assets/LogoOC.webp";
import { setInfos } from "../Reduxtore/InfoRedux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


function About() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.info.infos);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let info = Book;
        dispatch(setInfos(info));
        setLoading(false);
    }, [])

    if (loading) {
        return (<div></div>)
    } else {
        return (
            <>
                <NavBar />
                <NavBarMobile/>
                <main className="aboutContainer">
                    <Title title={"Prenez le temps de me connaitre"} />
                    <div className="presentationContainer">
                        <img className="presentation__img" src={moi} alt="Ingrid Stemer" />
                        <Presentation
                            title={data[0].title}
                            description={data[0].description}
                        />
                        <Reseaux/>
                    </div>

                    <div className="about__activities">
                        <h3 className="about__activities__title">Mes projets et activités du moment</h3>
                        <p className="about__activities--text"><span>Formation POEC développeur front-end, du 1er juin au 4 septembre</span> <br />
                        D'une durée de 3 mois, cette formation en distanciel me permettra de validé le Scrum Master PSM1.
                        Via différentes parties, je verrais diverses méthodes techniques et normes, ainsi que de la gestion de projet
                        mais aussi du dev front (Html/css, node js, bootstrap, JS, jquery/Angular ainsi qu'un peu de dev pour appli mobile)
                        </p>

                        <p className="about__activities--text">
                        <span>Projet personnel sous Angular de To Do List à ma sauce</span> <br/>
                        Le but ici est de prendre en main Angular, j'ai entamé le projet de faire une To Do List qui comprendrait un formulaire pour
                        la faire, et que cette dernière s'affiche en condensé sur la page d'accueil afin qu'on puisse en cliquant dessus accéder à notre
                         liste plus complète. Un des objectifs est également d'avoir plusieurs Liste sur la page d'accueil et de cliquer sur celle choisie.
                         J'ajoute aussi la possibilité de modifier/ supprimer cette dernière à volonté <br/> En pause
                        </p>
                    </div>

                    <div className="about__diplome">
                        <Presentation
                            title={data[2].title}
                            description={data[2].description}
                        />
                        <img className="about__diplome--img" src={LogoOC} alt="Logo d'openclassroom" />
                    </div>

                    <div className="about__loisirs">
                        <Presentation
                            title={data[3].title}
                            description={data[3].description}
                        />
                        {data[3].Loisirs.map(element => (
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
                            <p>Vous souhaitez connaitre mon portentiel pour travailler dans votre entreprise ? Je vous propose de jeter un oeil sur mon profil AssessFirst</p>
                            <a href="/DataPdf/AssestFirst_profil.pdf" download="Profil-AssessFirst-IS.pdf"><Button name={"Mon profil AssessFirst"}/></a>
                        </div>
                        <div className="about__CV--text">
                            <p >À présent que vous me connaissez un peu mieux, n'hésitez pas à repartir avec un petit souvenir en cliquant sur le bouton !</p>
                            <a href="/DataPdf/Ingrid_STEMER_CDA_Alternance.pdf" download="CV-CDA-Alternance-IS.pdf"><Button name={"Mon CV"} /></a>
                        </div>
                        <div className="about__CV--mail">
                            <p>Et si vous souhaitez entrer directement en contact avec moi n'hésitez pas à mécrire un <span><a href="mailto:ingrid.stemer@live.fr">mail</a></span></p>
                        </div>
                    </div>

                </main>
                <Footer />
            </>
        )
    }

}
export default About