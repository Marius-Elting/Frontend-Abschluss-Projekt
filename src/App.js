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
import { collection, getDocs, addDoc } from "firebase/firestore";
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage/LoginPage';


function App() {
  const { user } = UserAuth();
  const [favorites, addFavorites] = useState([]);
  const [dataBaseFavs, setdataBaseFavs] = useState();
  const [useAbleFavs, setUseAbleFavs] = useState();
  let idString = [];
  const ref = collection(db, "MovieMania");

  favorites.map((el) => {
    idString.push(el.id);
  });
  async function addToFavorites(selected) {
    if (!idString.includes(selected.id)) {
      addFavorites([...favorites, selected]);
      selected.userID = user?.uid;
      await addDoc(ref, selected);
    };
  }


  useEffect(() => {
    const getFavorites = async () => {
      const a = await getDocs(ref);
      setdataBaseFavs(a.docs.map((doc) => ({ ...doc.data(), docid: doc.id })));
    };
    getFavorites();

  }, [favorites,]);

  useEffect(() => {
    if (dataBaseFavs === undefined) return;
    setUseAbleFavs(dataBaseFavs.filter(el => el.userID === user?.uid));
  }, [dataBaseFavs]);
  return (
    <div className="App">
      {/* <AuthContextProvider > */}
      <Router>
        {/* <SplashScreen /> */}
        <Routes>
          <Route path="/" element={<><SplashScreen /></>} />
          <Route path="/start" element={<><StartPage /></>} />
          <Route path="/home" element={<><Home /><Navigation page={"home"} /></>} />
          <Route path="/discover/:variant/:searchValue" element={<><SearchGenre addToFavorites={addToFavorites} dataBaseFavs={useAbleFavs} /><Navigation /></>} />
          <Route path="/details/:movieID/:movieName" element={<><Detail addToFavorites={addToFavorites} /><Navigation /></>} />
          <Route path="/favorites" element={<><Favorites Favorites={favorites} /><Navigation page={"favo"} /></>} />
          <Route path="/login" element={<><LoginPage /><Navigation page="login" /></>} />
        </Routes>
      </Router>
      {/* </AuthContextProvider> */}

    </div>
  );
}

export default App;
