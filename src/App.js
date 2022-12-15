import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SearchGenre from './pages/SearchGenre/SearchGenre';
import Detail from './pages/Detail/Detail';
import StartPage from './pages/StartPage/StartPage';
import Favorites from './pages/Favorites/Favorites';

function App() {
  const [favorites, addFavorites] = useState([]);

  let userLang = navigator.language || navigator.userLanguage;
  console.log(userLang);

  function addToFavorites(selected) {


  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><StartPage /></>} />
          <Route path="/home" element={<><Home /><Navigation /></>} />
          <Route path="/discover/:variant/:searchValue" element={<><SearchGenre addToFavorites={addToFavorites} /><Navigation /></>} />
          <Route path="/details/:movieID/:movieName" element={<><Detail /><Navigation /></>} />
          <Route path="/favorites" element={<><Favorites Favorites={favorites} /><Navigation /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
