import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';

import GenreButtons from '../../components/GenreButtons/GenreButtons';

function Home() {
    return (
        <div>
            <SearchBar />
            <GenreButtons />
        </div>
    );
}

export default Home;