import { Link } from "react-router-dom";

function Home (){
    return(
        <nav>
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/Bibliotheque'>Bibliothèque</Link></li>
            </ul>
        </nav>
    )
}
export default Home;