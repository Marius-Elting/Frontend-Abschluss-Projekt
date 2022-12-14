import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';

import GenreButtons from '../../components/GenreButtons/GenreButtons';
import TrendingCard from '../../components/TrendingCard/TrendingCard';

function Home() {
    return (
        <div className='home-wrapper'>
            <h1>Welcome!</h1>
            <SearchBar />
            <GenreButtons />
            <TrendingCard />
        </div>
    );
}

export default Home;