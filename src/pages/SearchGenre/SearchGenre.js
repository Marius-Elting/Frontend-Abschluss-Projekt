import './SearchGenre.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GenreCard from '../../components/GenreCard/GenreCard';
import SearchBar from '../../components/SearchBar/SearchBar';

function SearchGenre({ addToFavorites }) {
    const params = useParams();
    const [movieData, setMovieData] = useState();

    function SortAscending() {
        const copyMovieData = [...movieData];

        setMovieData(copyMovieData.sort((a, b) => b.vote_average - a.vote_average));
    }

    function SortDescending() {
        const copyMovieData = [...movieData];

        setMovieData(copyMovieData.sort((a, b) => a.vote_average - b.vote_average));
    }


    useEffect(() => {
        if (params.searchValue === undefined) {
            return;
        }
        if (params.variant === "search") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${"12504ab7183e888f66ac1785c47850f3"}&language=de-DE&query=${params.searchValue}&include_adult=false`)
                .then(response => response.json())
                .then(data => {
                    setMovieData(data.results);
                });
        }
        if (params.variant === "genre") {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=12504ab7183e888f66ac1785c47850f3&with_genres=${params.searchValue}`)
                .then(response => response.json())
                .then(data => {
                    setMovieData(data.results);
                });
        }
        if (params.variant === "trending") {
            fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=12504ab7183e888f66ac1785c47850f3&language=de-DE`)
                .then(response => response.json())
                .then(data => {
                    setMovieData(data.results);
                });
        }
    }, [params]);

    if (movieData === undefined) {
        return;
    }
    return (
        <section className='SearchGenre-Wrapper'>
            <SearchBar />
            <div className='sortBtnDiv'>
                <button className='sortBtn' type='button' onClick={SortAscending}>Sort by popularity ↑</button>
                <button className='sortBtn' type='button' onClick={SortDescending}>Sort by popularity ↓</button>
            </div>
            {movieData.map((singleMovieData, index) => {
                return (
                    <GenreCard addToFavorites={addToFavorites} data={singleMovieData} index={index} />
                );
            })}
        </section>
    );
}

export default SearchGenre;