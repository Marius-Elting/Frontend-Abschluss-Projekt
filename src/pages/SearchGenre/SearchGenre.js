import './SearchGenre.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GenreCard from '../../components/GenreCard/GenreCard';

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
                    setMovieData(data);
                    console.log(data);
                });
        }

    }, [params]);

    if (movieData === undefined) {
        return;
    }
    return (
        <section>
            {movieData.results.map((singleMovieData) => {
                return (
                    <GenreCard data={singleMovieData} />
                );
            })}
        </section>
    );
}

export default SearchGenre;