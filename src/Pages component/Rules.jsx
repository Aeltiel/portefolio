import { isOpen } from "../Reduxtore/IsOpen";
import { useDispatch, useSelector } from "react-redux";


function Rules(){
    const dispatch=useDispatch();
    const close = useSelector(state => state.isopen.isOpen)
    return(
        <>
        {close ?
        <div></div>
        :
            <div className="rule__Container">
            <button className="rule__closeBtn" onClick={() => dispatch(isOpen(true))}><i className="fa-solid fa-xmark"></i></button>
            <p className="rule__text1">
                Bienvenue dans la Bibliothèque, noble visiteur ! Ici vous trouverez toutes les
                informations que vous désirez sur ma Maitresse. Cependant, les ouvrages que vous
                devez consulter <span>sont protégés</span>. Ils nécessitent <span>des clefs</span> pour pouvoir les ouvrir.
                Et malheureusement, le dernier visiteur ne les as pas rangés. C'est donc à vous de <span>les retrouver</span> pour 
                accéder aux savoirs que vous convoitez. De plus, <span>chaque clef
                ouvre un seul et unique livre</span>, il vous faudra donc toutes les trouvées pour lire tous
                les volumes !<br/>
                Mais rassurez-vous elles sont uniquement dans cette pièce !
            </p>
            <p className="rule__text2">
                Oh ! Et j'allais oublier, si vous le souhaitez, vous pouvez quitter la Bibliothèque en
                passant par le portail qui se trouve sur la dalle bleue à votre droite.
            </p>
            <p className="rule__text3">
                Bonne lecture.
            </p>
        </div>
        }
        </>
    )
}
export default Rules