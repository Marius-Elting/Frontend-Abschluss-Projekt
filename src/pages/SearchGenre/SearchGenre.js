import './SearchGenre.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GenreCard from '../../components/GenreCard/GenreCard';
import SearchBar from '../../components/SearchBar/SearchBar';

function SearchGenre() {
    const params = useParams();
    const [movieData, setMovieData] = useState();

    useEffect(() => {
        if (params.searchValue === undefined) {
            return;
        }
        if (params.variant === "search") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${"12504ab7183e888f66ac1785c47850f3"}&language=de-DE&query=${params.searchValue}&include_adult=false`)
                .then(response => response.json())
                .then(data => {
                    setMovieData(data.results);
                    console.log(data);

                });
        }
        if (params.variant === "genre") {
            fetch(`https://api.themoviedb.org/3/list/${params.searchValue}?api_key=12504ab7183e888f66ac1785c47850f3&language=de-DE`)
                .then(response => response.json())
                .then(data => {
                    setMovieData(data.items);
                    console.log(data);

                });
        }
        if (params.variant === "trending") {
            fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=12504ab7183e888f66ac1785c47850f3&language=de-DE`)
                .then(response => response.json())
                .then(data => {
                    setMovieData(data.results);
                    console.log(data);
                });
        }
    }, [params]);

    if (movieData === undefined) {
        return;
    }
    console.log(movieData);
    return (
        <section className='SearchGenre-Wrapper'>
            <SearchBar />
            {movieData.map((singleMovieData, index) => {
                return (
                    <GenreCard data={singleMovieData} index={index} />
                );
            })}
        </section>
    );
}

export default SearchGenre;