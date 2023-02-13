import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store from "../Reduxtore/store";
import { connect } from "react-redux";

function NavBar() {
    //la constante ci dessus correspont à l'état basique de mon composant définit dans le reducer c'est un peu le useState
    const navigation = useSelector(state => state.navigation);
    const dispatch = useDispatch(); //Pour faire fonctionner useDispatch qui correspond à mon changement de state
    const lienActif = (link) => {
        dispatch({type:"Active", payload:link});
    }

    return (
        <nav>
            <NavLink to='/' className="NavActive" onClick={()=>lienActif("Accueil")}>
               Accueil
            </NavLink>
            <NavLink to='/Bibliotheque' className="NavActive" onClick={()=>lienActif("Bibliothèque")}>
                Bibliothèque
            </NavLink>
        </nav>
    )
}

//permet de mapper les états du store à des props du composants, de sort à pouvoir accéder à ces état via des props
//ici on mal l'état "navigation" à la prop'naviation' du composant
const mapStateToProps = state =>{
    return{
        navigation:state.navigation,
    };
};
export default connect(mapStateToProps)(NavBar)