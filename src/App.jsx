import Bibliothèque from './Pages/Bibliothèque';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Bibliotheque' element={<Bibliothèque/>}/>
      </Routes>
    </div>
  );
}

export default App;
