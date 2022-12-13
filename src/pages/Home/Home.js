import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';

import GenreButtons from '../../components/GenreButtons/GenreButtons';
import TrendingCard from '../../components/TrendingCard/TrendingCard';

function Home() {
    return (
        <div className='home-wrapper'>
            <SearchBar />
            <GenreButtons />
            <TrendingCard />
        </div>
    );
}

export default Home;