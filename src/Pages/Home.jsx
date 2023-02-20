import moi from "../Assets/moi.webp"
import Corbeau from "../Assets/Corbeau-sur-crâne-01.webp"
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import Slider from "../Component/Slider";
import Button from "../Component/Button";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NavBar />
            <main className="homeContainer">
                <h1 className="home__Title">
                    <i className="fa-solid fa-fan"></i>
                    Bienvenue sur mon portefolio !
                    <i className="fa-solid fa-fan"></i>
                </h1>

                <div className="presentation">
                    <img className="presentation__img" src={moi} alt="Ingrid Stemer" />
                    <h2 className="presentation__title">Ingrid STEMER <br /> Développeuse Web/Développeuse front-end</h2>
                </div>

                <div className="home__info">
                    <div className="home__info__text">
                        <p className="home__info__text--text">Avant de continuer, j'aimerais vous donner quelques précisions sur le fonctionnement de ce portefolio.
                            En effet, l'onglet Bibliothèque vous transportera dans une version alternative de mon portefolio, je vous laisse, bien sur, le soin de le découvrir par vous-même.
                            Le reste du portefolio est construit de manière tout à fait classique.
                        </p>
                        <p className="home__info__text--text--1">Bonne visite!</p>
                    </div>
                    <img className="home__info--img" src={Corbeau} alt="Dessin d'un corbeau sur un crane" />
                </div>

                <div className="home__project">
                    <Slider />
                    <div className="home__project__container">
                        <h2 className="home__project--title presentation__title">Mes projets !</h2>
                        <p className=" home__project--text">Vous souhaitez voir de quoi je suis capable ? Regardez mes projets !</p>
                        <div className="home__project__btn">
                            <Button name={<Link to='/Projects'>Mes Projets</Link>} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )

}

export default Home;