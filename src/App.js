import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SearchGenre from './pages/SearchGenre/SearchGenre';
import Detail from './pages/Detail/Detail';
import StartPage from './pages/StartPage/StartPage';
import Favorites from './pages/Favorites/Favorites';

import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from './Firebase';

function App() {
  const [favorites, addFavorites] = useState([]);
  let idString = [];
  let userLang = navigator.language || navigator.userLanguage;


  const ref = collection(db, "MovieMania");

  useEffect(() => {
    const getFavorites = async () => {
      const a = await getDocs(ref);
      (a.docs.map((doc) => ({ ...doc.data(), docid: doc.id })));
    };
    getFavorites();
  }, []);


  favorites.map((el) => {
    idString.push(el.id);
  });

  function addToFavorites(selected) {
    if (!idString.includes(selected.id)) {
      addFavorites([...favorites, selected]);
      favorites.map(async (el) => {
        await addDoc(ref, el);
      });
    };
  }


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><StartPage /></>} />
          <Route path="/home" element={<><Home /><Navigation page={"home"} /></>} />
          <Route path="/discover/:variant/:searchValue" element={<><SearchGenre addToFavorites={addToFavorites} /><Navigation /></>} />
          <Route path="/details/:movieID/:movieName" element={<><Detail /><Navigation /></>} />
          <Route path="/favorites" element={<><Favorites Favorites={favorites} /><Navigation page={"favo"} /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
