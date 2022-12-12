import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SearchGenre from './pages/SearchGenre/SearchGenre';
import Detail from './pages/Detail/Detail';
import StartPage from './pages/StartPage/StartPage';
import GenreCard from './components/GerneCard/GenreCard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><StartPage /></>} />
          <Route path="/home" element={<><Home /><Navigation /></>} />
          <Route path="/genre/:genreID" element={<><SearchGenre /><Navigation /></>} />
          <Route path="/details/:movieID/:movieName" element={<><Detail /><Navigation /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
