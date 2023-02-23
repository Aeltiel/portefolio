import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import Book from "../Data/book.json";
import Presentation from "../Pages component/Présentation";
import Slider from "../Component/Slider";
import Title from "../Component/Title";
import Container from "../Component/Container";
import ReduxIcon from "../Assets/redux-icon.webp";
import { setInfos } from "../Reduxtore/InfoRedux";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";

function Projects() {
    const dispatch = useDispatch();
    const[loading, setLoading] = useState(true)
    const data = useSelector(state => state.info.infos);

    useEffect(()=> {
       let dataProject = Book.find(element => element.id === '002');
       dispatch(setInfos(dataProject));
       setLoading(false); 
    },[])

 if(loading){
    return(<div></div>)
 }  else{
    return (
        <>
            <NavBar />
            <main className="projectConatainer" key={data.id}>
                <Title title={"Bienvenue dans ma galerie de projets !"}/>
                <div className="project__icons">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-js"></i>
                <i className="fa-brands fa-react"></i>
                <img className="project__icons--img" src = {ReduxIcon} alt = 'Icon redux'/>
                </div>
            <Presentation 
                title={data.title}
                description = {data.description}
            />
            <div className="project__slider">
            <Slider/>
            </div>
            <div className="project__détail">
                {data.projects.map(element => (
                    <Container
                        key={element.id}
                        image={element.image}
                        title={element.title}
                        description={element.description}
                        language={element.Langages}                    
                    />
                ))}
            </div>
            </main>
            <Footer />
        </>
    )
 }
    
}
export default Projects