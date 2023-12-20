import { useDispatch, useSelector } from "react-redux";
import {
  prochainCaroussel,
  precedentCaroussel,
} from "../Reduxtore/CarousselRedux";
import { useState } from "react";

function Carrousel() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.carrousel.carrouselData);
  const index = useSelector((state) => state.carrousel.carrouselIndex);
  const [animation, setAnimation] = useState(false);

  function CarrouselItem({ data }) {
    return (
      <>
        <div className="carrousel__box__book" key={data.id}>
          <div
            className={`carrousel__box__book--text ${
              animation ? "transition" : ""
            }`}
          >
            <h3 className="carrousel__box--title">{data.title}</h3>
            <p className="carrousel__box__book--description">
              {data.description}
            </p>
            <div className="carrousel__box__book--langage">
              {data.Langages.map((icons) => {
                return (
                  <div key={icons.id}>
                    <i className={icons.icon}></i>
                    {icons.iconimg && (
                      <img
                        src={icons.iconimg}
                        alt="icon langage"
                        className="carrousel__box__book--langage--img"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="carrousel__box__book1" key={data.index}>
          <img
            className={`carrousel__box--img ${animation ? "transition" : ""}`}
            src={data.image}
            alt="project screen"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <button
        className="carrousel__Left "
        onClick={(e) => {
          dispatch(precedentCaroussel(index));
          setAnimation(true);
        }}
      >
        <i className="fa-solid fa-caret-up"></i>
      </button>

      <CarrouselItem data={data[index]} />

      <button
        className="carrousel__Right"
        onClick={(e) => {
          dispatch(prochainCaroussel(index));
          setAnimation(true);
        }}
      >
        <i className="fa-solid fa-caret-down"></i>
      </button>
    </>
  );
}
export default Carrousel;
