import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import Title from "../Component/Title";
import Presentation from "../Component/Présentation";
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
                <main className="aboutContainer">
                    <Title title={"Prenez le temps de me connaitre"} />
                    <div className="presentationContainer">
                        <img className="presentation__img" src={moi} alt="Ingrid Stemer" />
                        <Presentation
                            title={data[0].title}
                            description={data[0].description}
                        />
                        <p className="presentation__reseaux">
                            Retrouvez moi sur
                            <a href="https://www.linkedin.com/in/ingrid-stemer-0b4526227/"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/aeltielnh/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://github.com/Aeltiel"><i className="fa-brands fa-github"></i></a>
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
                        <div className="about__CV--text">
                            <p >À présent que vous me connaissez un peu mieux, n'hésitez pas à repartir avec un petit souvenir en cliquant sur le bouton !</p>
                            <a href="../Data/Ingrid_STEMER_Dev_Junior.pdf" download><Button name={"Mon CV"} /></a>
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