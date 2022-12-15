import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SearchGenre from './pages/SearchGenre/SearchGenre';
import Detail from './pages/Detail/Detail';
import StartPage from './pages/StartPage/StartPage';
import Favorites from './pages/Favorites/Favorites';
import SplashScreen from './pages/SplashScreen/SplashScreen';

import { db } from './Firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";
>>>>>>>>> Temporary merge branch 2

function App() {
  const [favorites, addFavorites] = useState([]);
  let idString = [];
  let userLang = navigator.language || navigator.userLanguage;

  const ref = collection(db, "MovieMania");

  const getFavorites = async () => {
    const a = await getDocs(ref);
    console.log(ref);
    console.log(a);
  };
  getFavorites();

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
        {/* <SplashScreen /> */}
        <Routes>
          <Route path="/" element={<><SplashScreen /></>} />
          <Route path="/start" element={<><StartPage /></>} />
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
