
function Parchemin() {

    return (
        <div className="paper__container">
            <h3 className="paper__title">
            <i className="fa-solid fa-scroll"></i>
                Mes nouvelles quêtes !
                <i className="fa-solid fa-scroll"></i>
            </h3>

            <ul className="paper__list">
                <li className="paper__list__quest">
                    <i className="fa-regular fa-square"></i>
                    Formation POEC développeur front-end, du 1er juin au 4 septembre
                    <p className="paper__list__quest--text">
                        D'une durée de 3 mois, cette formation en distanciel me permettra de validé le Scrum Master PSM1.
                        Via différentes parties, je verrais diverses méthodes techniques et normes, ainsi que de la gestion de projet
                        mais aussi du dev front (Html/css, node js, bootstrap, JS, jquery/Angular ainsi qu'un peu de dev pour appli mobile)
                    </p>
                </li>
                <li className="paper__list__quest">
                    <i className="fa-regular fa-square"></i>
                    Cours WordPress
                    <p className="paper__list__quest--text">
                        En parallèle de mon POEC, je prend des cours sur WordPress pour m'informer sur ce CMS et faire quelques projets dessus
                    </p>
                </li>
            </ul>
        </div>

    )
}
export default Parchemin;