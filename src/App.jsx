import Bibliothèque from "./Pages/Bibliothèque";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";
import { inject } from "@vercel/analytics";
import { useEffect, useState } from "react";

inject();
function App() {
  //state pour checker la taille de l'écran grâce window.innerWidth
  const [mobile, setMobile] = useState(window.innerWidth <= 475);

  //s'assure que ça soit bien géré lors du montage et démontage des composants et éviter les fuites de mémoire
  useEffect(() => {
    const rezise = () => {
      setMobile(window.innerWidth <= 475);
    };
    window.addEventListener("resize", rezise);
    return () => {
      window.removeEventListener("rezise", rezise);
    };
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          {mobile ? (
            <Route path="/Bibliotheque" element={<Home />} />
          ) : (
            <Route path="/" element={<Bibliothèque />} />
          )}
          <Route path="/Home" element={<Home />} />
          <Route path="/Bibliotheque" element={<Bibliothèque />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
