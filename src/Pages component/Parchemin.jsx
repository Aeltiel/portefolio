function Parchemin() {
  return (
    <div className="paper__container">
      <h3 className="paper__title">
        <i className="fa-solid fa-scroll"></i>
        Mes nouvelles quêtes !<i className="fa-solid fa-scroll"></i>
      </h3>

      <ul className="paper__list">
        <li className="paper__list__quest">
          <i className="fa-regular fa-square"></i>
          Projet JVThèque
          <p className="paper__list__quest--text">
            Site internet réalisé de A à Z. La partie Backend est une API Rest
            réalisé en node.js à l'aide d'express. L'API est liée à une base de
            donnée MongoDB. La partie Frontend est réalisé avec React. Le site
            permettra de créer un compte afin de créer sa propre liste de Jeux
            Vidéos, pour ceux qui souhaite avoir un outil accessible partout.
            Ajoutez les jeux que vous avez, ou que vous souhaitez avoir en
            fonction de leur plateforme. Puis triez les selon vos envies.
            L'appli est designé en mobile first afin de faciliter l'intéraction
            mobile, pour vous aider lors de vos sessions shopping JV. L'appli
            est également disponible sur desktop pour votre shopping en ligne !
          </p>
        </li>
        <li className="paper__list__quest">
          <i className="fa-regular fa-square"></i>
          Cours React + Redux sur Udemy
          <p className="paper__list__quest--text">
            Pour parfaire ma compréhension et ma pratique de React et Redux
          </p>
        </li>
      </ul>
    </div>
  );
}
export default Parchemin;
