import Reseaux from "../Component/Reseaux"
import Button from "../Component/Button"

function Page({ img, text, title }) {
    return (
        <div className="page__box">
            <img className="page__img" src={img} alt="Ingrid Stemer/Logo OC" />
            <div className="page__content">
                <h3 className="page__content--title">{title}</h3>
                <p className="page__content--text">{text}</p>
                <Reseaux />
                <div className="page__content--mail">
                    <p>Et si vous souhaitez entrer directement en contact avec moi n'hésitez pas à mécrire un <span><a href="mailto:ingrid.stemer@live.fr">mail</a></span></p>
                </div>
            </div>
            <div className="page__CV">
                <div className="page__CV--profil">
                    <p>Vous souhaitez connaitre mon portentiel pour travailler dans votre entreprise ? Je vous propose de jeter un oeil sur mon profil AssessFirst</p>
                    <a href="../Data/AssestFirst_profil.pdf" download><Button name={"Mon profil AssessFirst"} /></a>
                </div>
                <div className="page__CV--text">
                    <p >À présent que vous me connaissez un peu mieux, n'hésitez pas à repartir avec un petit souvenir en cliquant sur le bouton !</p>
                    <a href="../Data/Ingrid_STEMER_Dev_Junior.pdf" download><Button name={"Mon CV"} /></a>
                </div>

            </div>
        </div>
    )
}
export default Page