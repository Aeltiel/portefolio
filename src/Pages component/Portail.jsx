import Corbeau from '../Assets/Corbeau-sur-crâne-01.webp'
import { isOpen } from "../Reduxtore/IsOpen";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Portail() {
    const dispatch = useDispatch();
    const close = useSelector(state => state.isopen.isOpen)
    return (
        <>
            {close ?
                <div></div>
                :
                <div className="containerPortail">
                    <img className = "portail__img" src={Corbeau} alt='Dessin corbeau sur crane'/>
                    <div className="portail__Container">
                        <button className="portail__closeBtn" onClick={() => dispatch(isOpen(true))}><i className="fa-solid fa-xmark"></i></button>
                        <p className="portail__text1">
                            Bienvenue dans la Bibliothèque ! Malheureusement votre portail n'est pas adapté pour profité pleinement
                            de ce que cet endroit peut vous offrir. Ainsi deux solutions s'offrent à vous :
                        </p>
                        <ul className="portail__list">
                            <li>Soit changer votre angle de vue pour voir plus grand</li>
                            <li>Soit si votre angle de vue demeure restraint n'hésitez pas à emprunter le <Link to='/Home'>Portail vers l'Accueil</Link> </li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}
export default Portail