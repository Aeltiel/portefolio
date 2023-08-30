function Container({ image, title, description, language, id }) {
  const checkLang = language;
  const pair = parseInt(id);
  return (
    <>
      <div className={pair % 2 === 0 ? "container__box" : "Twist"}>
        <img className="container__img" src={image} alt="screen ou dessin" />
        <div className="container__text">
          <h3 className="container__text--title">{title}</h3>
          <p className="container__text--description">{description}</p>
          {checkLang ? (
            <p className="container__text--langage">
              <span>Langages :</span> {language}
            </p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
export default Container;
