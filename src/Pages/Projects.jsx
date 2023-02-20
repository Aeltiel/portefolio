import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import Book from "../Data/book.json";
import Presentation from "../Pages component/Présentation";
import Title from "../Component/Title";
import { setInfos } from "../Reduxtore/InfoRedux";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

function Projects() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.info.infos);

    useEffect(()=> {
       let dataProject = Book.find(element => element.id === '002');
       dispatch(setInfos(dataProject)); 
    },[])

    
    return (
        <>
            <NavBar />
            <main className="projectConatainer" key={data.id}>
                <Title title={"Bienvenue dans ma galerie de projets !"}/>
            <Presentation 
                title={data.title}
                description = {data.description}
            />
            </main>
            <Footer />
        </>
    )
}
export default Projects