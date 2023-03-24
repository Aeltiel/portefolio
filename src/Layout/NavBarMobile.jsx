import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isOpen } from "../Reduxtore/IsOpen";

function NavBarMobile() {
    const open = useSelector(state => state.isopen.isOpen);
    const dispatch = useDispatch();
    function close(){
        if (open === true){
            dispatch(isOpen(false))
        }
    }
    
    return (
        <header className="mobileHead">
                <button className="navBtn" onClick={() => {dispatch(isOpen(true)); close() }}><i className="fa-solid fa-bars"></i></button>
            
                {open ?
                <nav className="navBar">
                    <ul className="navList">
                    <li className="navLink"><Link to='/Home'>Accueil</Link></li>
                    <li className="navLink"><Link to='/Projects'>Projets</Link></li>
                    <li className="navLink"><Link to='/About'>À Propos</Link></li>
                </ul>  
                </nav>: <div></div>
                }   
           
        </header>
    )
}
export default NavBarMobile