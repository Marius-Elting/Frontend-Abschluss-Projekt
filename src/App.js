import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SearchGenre from './pages/SearchGenre/SearchGenre';
import Detail from './pages/Detail/Detail';
import StartPage from './pages/StartPage/StartPage';

function App() {

  // useEffect(() => {
  //   fetch("https://geolocation-db.com/json/").then(res => res.json).then(res => console.log(res));

  // }, []);
  let userLang = navigator.language || navigator.userLanguage;
  console.log(userLang);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><StartPage /></>} />
          <Route path="/home" element={<><Home /><Navigation /></>} />
          <Route path="/discover/:variant/:searchValue" element={<><SearchGenre /><Navigation /></>} />
          <Route path="/details/:movieID/:movieName" element={<><Detail /><Navigation /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
