import { useDispatch, useSelector } from "react-redux";
import { Left, Right } from "../Reduxtore/CarrouselLoisirsRedux";

function Carrousel() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.carrouselLoisirs.data);
    const index = useSelector(state => state.carrouselLoisirs.index);
    //important : bien remettre la logique du carrousel en local en plus du store redux pour faire le calcul
    function precedenteImage() {
        var tailleTableau = data.length;
        if (index > 0) {
            return index - 1
        }
        else {
            return tailleTableau - 1;
        }
    }
    function suivanteImage() {
        var tailleTableau = data.length;
        if (index < tailleTableau - 1) {
            return index + 1;
        }
        else {
            return 0;
        }
    }

    return (
        <>
            <div className="carrousel__Container">
                <button className="carrousel__Left " onClick={(e) => dispatch(Left(index))}><i className="fa-solid fa-caret-up"></i></button>
                <div className="carrousel__box box">
                    <h3 className="carrousel__box--title">{data[precedenteImage()].title}</h3>
                    <div className="carrousel__box__book">
                        <div className="carrousel__box__book--text">
                        <p className="carrousel__box__book--description">{data[precedenteImage()].description}</p>
                        </div>
                        <img className="carrousel__box--img" src={data[precedenteImage()].image} alt="project screen" />
                    </div>
                </div>

                <div className="carrousel__box">
                    <p className="carrousel__box--title">{data[index].title}</p>
                    <p className="carrousel__box--book--description">{data[index].description}</p>
                    <img className="carrousel__box--img" src={data[index].image} alt="project screen" />
                </div>

                <div className="carrousel__box">
                    <p className="carrousel__box--title">{data[suivanteImage()].title}</p>
                    <p className="carrousel__box--book--description">{data[suivanteImage()].description}</p>
                    <img className="carrousel__box--img" src={data[suivanteImage()].image} alt="project screen" />
                </div>

                <button className="carrousel__Right" onClick={(e) => dispatch(Right(index))}><i className="fa-solid fa-caret-down"></i></button>
            </div>
        </>
    )
}
export default Carrousel