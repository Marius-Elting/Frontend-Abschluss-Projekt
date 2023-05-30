import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SearchGenre from './pages/SearchGenre/SearchGenre';
import Detail from './pages/Detail/Detail';
import StartPage from './pages/StartPage/StartPage';
import Favorites from './pages/Favorites/Favorites';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import { db } from './Firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { UserAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage/LoginPage';
import Datenschutz from './pages/Datenschutz/Datenschutz';


function App() {
  const { user } = UserAuth();
  const [favorites, addFavorites] = useState([]);

  const [dataBaseFavs, setdataBaseFavs] = useState();
  const [useAbleFavs, setUseAbleFavs] = useState();
  const [refreshFavs, setRefreshFavs] = useState(false)
  let idString = [];
  const ref = collection(db, "MovieMania");


  favorites.forEach((el) => {
    idString.push(el.id);
  });

  // in dieser Funktion werden Favoriten hinzugefügt und in der Datenbank gespeichert welcher user den Film als favoriten gespeichert hat
  async function addToFavorites(selected) {
    // hier wird geprüft ob der Film bereits als Favorit hinzugefügt wurde
    if (!idString.includes(selected.id)) {
      // hier wird dem array favorites das selectete item hinzugefügt wird
      addFavorites([...favorites, selected]);
      // hier wird dem object die entsprechende userID hinzugefügt, damit im nachhinein nachvolzogen werden kann welcher user diesen Film als Favorit gespeichert hat
      selected.userID = user?.uid;
      // hier wird der neue Favorit in der Datenbank gespeichert
      await addDoc(ref, selected);
    };
  }

  // Hier werden die Favoriten aus der Datenbank geladen
  useEffect(() => {
    const getFavorites = async () => {
      const a = await getDocs(ref);

      const favs = a.docs.map((doc) => ({ ...doc.data(), docid: doc.id }))
      console.log(a.docs.map((doc) => ({ ...doc.data(), docid: doc.id })).filter(el => el.userID === user?.uid))
      setdataBaseFavs(favs);
      // if (favs === undefined) return;
      setUseAbleFavs(favs.filter(el => el.userID === user?.uid));
    };
    getFavorites();

  }, [favorites, user, refreshFavs]);

  // hier werden die UseAbleFavs gesetzt (es werden nur favoriten ausgegeben die der jeweilige User gespeichert hat)

  // diese Funktion löscht einen ausgewählten Favoriten aus der Datenbank
  const deleteFavorite = async (id) => {
    const FavoDoc = doc(db, "MovieMania", id);
    await deleteDoc(FavoDoc);
    setRefreshFavs(prev => !prev)
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><SplashScreen /></>} />
          <Route path="/start" element={<><StartPage /></>} />
          <Route path="/home" element={<><Home /><Navigation page={"home"} /></>} />
          <Route path="/discover/:variant/:searchValue" element={<><SearchGenre addToFavorites={addToFavorites} deleteFavorite={deleteFavorite} dataBaseFavs={useAbleFavs} /><Navigation /></>} />
          <Route path="/details/:movieID/:movieName" element={<><Detail addToFavorites={addToFavorites} deleteFavorite={deleteFavorite} dataBaseFavs={useAbleFavs} /><Navigation /></>} />
          <Route path="/favorites" element={<><Favorites deleteFavorite={deleteFavorite} favorites={useAbleFavs} Favorites={favorites} /><Navigation page={"favo"} /></>} />
          <Route path="/login" element={<><LoginPage /><Navigation page="login" /></>} />
          <Route path="/datenschutz" element={<><Datenschutz /><Navigation page="login" /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
