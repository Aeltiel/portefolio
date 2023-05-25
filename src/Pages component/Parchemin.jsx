
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
                    Projet personnel sous Angular de To Do List à ma sauce ^^
                    <p className="paper__list__quest--text">
                        Le but ici est de prendre en main Angular, j'ai entamé le projet de faire une To Do List qui comprendrait un formulaire pour
                        la faire, et que cette dernière s'affiche en condensé sur la page d'accueil afin qu'on puisse en cliquant dessus accéder à notre
                         liste plus complète. Un des objectifs est également d'avoir plusieurs Liste sur la page d'accueil et de cliquer sur celle choisie.
                         J'ajoute aussi la possibilité de modifier/ supprimer cette dernière à volonté <br/> En pause
                    </p>
                </li>
            </ul>
        </div>

    )
}
export default Parchemin;