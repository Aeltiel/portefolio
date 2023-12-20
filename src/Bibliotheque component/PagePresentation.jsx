import Reseaux from "../Component/Reseaux";
import Button from "../Component/Button";

function Page({ img, text, title }) {
  return (
    <>
      <div className="page__box">
        <img className="page__img" src={img} alt="Ingrid Stemer" />
      </div>
      <div className="page__box1">
        <div className="page__content">
          <h3 className="page__content--title">{title}</h3>
          <p className="page__content--text">{text}</p>
          <Reseaux />
        </div>
      </div>
    </>
  );
}
export default Page;
