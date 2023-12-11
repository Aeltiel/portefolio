import { useDispatch, useSelector } from "react-redux";
import {
  prochainCaroussel,
  precedentCaroussel,
} from "../Reduxtore/CarousselRedux";

function Carrousel() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.carrousel.carrouselData);
  const index = useSelector((state) => state.carrousel.carrouselIndex);
  const tailleTableau = data.length;

  function getIndex(delta) {
    return (index + delta + tailleTableau) % tailleTableau;
  }

  function CarrouselItem({ data }) {
    return (
      <>
        <div className="carrousel__box__book">
          <div className="carrousel__box__book--text">
            <h3 className="carrousel__box--title">{data.title}</h3>
            <p className="carrousel__box__book--description">
              {data.description}
            </p>
            <p className="carrousel__box__book--langage">{data.Langages}</p>
          </div>
        </div>
        <div className="carrousel__box__book1">
          <img
            className="carrousel__box--img"
            src={data.image}
            alt="project screen"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <>
        <button
          className="carrousel__Left "
          onClick={(e) => dispatch(precedentCaroussel(index))}
        >
          <i className="fa-solid fa-caret-up"></i>
        </button>

        <CarrouselItem data={data[index]} />

        <button
          className="carrousel__Right"
          onClick={(e) => dispatch(prochainCaroussel(index))}
        >
          <i className="fa-solid fa-caret-down"></i>
        </button>
      </>
    </>
  );
}
export default Carrousel;
