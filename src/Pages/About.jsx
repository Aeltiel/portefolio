import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import Title from "../Component/Title";

function About(){
return(
    <>
    <NavBar/>
    <div className="aboutContainer">
    <Title title={"Prenez le temps de me connaitre"}/>
    </div>
    <Footer/>
    </>
)
}
export default About