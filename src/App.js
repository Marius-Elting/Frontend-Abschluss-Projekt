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
  // console.log(UserAuth());
  console.log(user);
  const [favorites, addFavorites] = useState([]);

  // const user = "";
  let idString = [];
  let userLang = navigator.language || navigator.userLanguage;

  const ref = collection(db, "MovieMania");




  favorites.map((el) => {
    idString.push(el.id);
  });
  console.log(user);
  function addToFavorites(selected) {
    if (!idString.includes(selected.id)) {
      addFavorites([...favorites, selected]);
      favorites.map(async (el) => {
        el.userID = user?.uid;
        await addDoc(ref, el);
      });
    };

  }


  return (
    <div className="App">
      {/* <AuthContextProvider > */}
      <Router>
        {/* <SplashScreen /> */}
        <Routes>
          {/* <Route path="/" element={<><SplashScreen /></>} /> */}
          <Route path="/start" element={<><StartPage /></>} />
          <Route path="/home" element={<><Home /><Navigation page={"home"} /></>} />
          <Route path="/discover/:variant/:searchValue" element={<><SearchGenre addToFavorites={addToFavorites} /><Navigation /></>} />
          <Route path="/details/:movieID/:movieName" element={<><Detail /><Navigation /></>} />
          <Route path="/favorites" element={<><Favorites Favorites={favorites} /><Navigation page={"favo"} /></>} />
          <Route path="/login" element={<><LoginPage /><Navigation page="login" /></>} />
        </Routes>
      </Router>
      {/* </AuthContextProvider> */}

    </div>
  );
}

export default App;
