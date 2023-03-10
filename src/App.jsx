import Bibliothèque from './Pages/Bibliothèque';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Brouillon from './Pages/Brouillon';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <><div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Bibliotheque' element={<Bibliothèque/>}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='/Brouillon' element={<Brouillon/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
