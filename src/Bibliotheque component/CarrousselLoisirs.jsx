import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Left, Right } from "../Reduxtore/CarrouselLoisirsRedux";

function Carrousel() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.carrouselLoisirs.data);
  const index = useSelector((state) => state.carrouselLoisirs.index);
  const [animation, setAnimation] = useState(false);

  function CarrouselItem({ data }) {
    return (
      <>
        <div className="carrousel__box__book">
          <div
            className={`carrousel__box__book--text ${
              animation ? "transition" : ""
            }`}
          >
            <h3 className="carrousel__box--title">{data.title}</h3>
            <p className="carrousel__box__book--description">
              {data.description}
            </p>
            <p className="carrousel__box__book--langage">{data.Langages}</p>
          </div>
        </div>
        <div className="carrousel__box__book1">
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
      <>
        <button
          className="carrousel__Left "
          onClick={(e) => {
            dispatch(Left(index));
            setAnimation(true);
          }}
        >
          <i className="fa-solid fa-caret-up"></i>
        </button>

        <CarrouselItem data={data[index]} />
        <button
          className="carrousel__Right"
          onClick={(e) => {
            dispatch(Right(index));
            setAnimation(true);
          }}
        >
          <i className="fa-solid fa-caret-down"></i>
        </button>
      </>
    </>
  );
}
export default Carrousel;
