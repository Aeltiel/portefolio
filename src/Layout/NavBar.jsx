import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
    //la constante ci dessus correspont à l'état basique de mon composant définit dans le reducer c'est un peu le useState
    const navigation = useSelector(state => state.navigation);
    const dispatch = useDispatch(); //Pour faire fonctionner useDispatch qui correspond à mon changement de state
    const lienActif = (link) => {
        dispatch({ type: "Active", payload: link });
    }

    return (
        <header>
            <nav>
                <NavLink to='/' className="NavActive" onClick={() => lienActif("Accueil")}>
                    Accueil
                </NavLink>
                <NavLink to='/Projects' className="NavActive" onClick={() => lienActif("Projets")}>
                    Projets
                </NavLink>
                <NavLink to='/About' className="NavActive" onClick={() => lienActif("À propos")}>
                    À Propos
                </NavLink>
                <NavLink to='/Bibliotheque' className="NavActive" onClick={() => lienActif("Bibliothèque")}>
                    Bibliothèque
                </NavLink>
            </nav>
        </header>
    )
};
export default NavBar