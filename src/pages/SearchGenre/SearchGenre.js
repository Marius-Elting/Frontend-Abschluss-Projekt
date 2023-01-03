import './SearchGenre.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GenreCard from '../../components/GenreCard/GenreCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import GenreButton from '../../components/GenreButtons/GenreButtons';

function SearchGenre({ addToFavorites, dataBaseFavs }) {
    // Hier werden die Params aus dem Link gezogen um an die ausgewählte Suchmethode und den Suchbegriff zuzugreifen
    const params = useParams();
    // In diseer useState variable werden die gefetchten Daten aus der API gespeichert
    const [movieData, setMovieData] = useState();

    // Hier wird aufsteigend Sortiert
    function SortAscending() {
        const copyMovieData = [...movieData];
        setMovieData(copyMovieData.sort((a, b) => b.vote_average - a.vote_average));
    }
    // Hier wird absteigend Sortiert
    function SortDescending() {
        const copyMovieData = [...movieData];
        setMovieData(copyMovieData.sort((a, b) => a.vote_average - b.vote_average));
    }

    // in diesem useEffect werden alle fetches ausgeführt 
    useEffect(() => {
        // diese If Abfrage vermeidet Fehlermeldungen wenn der Link unvollständig ist
        if (params.searchValue === undefined) return;


        // In den nachfolgenden If abfragen wird geprüft nachwas gesucht wird (was ist die Suchmethode) und entsprechend gefetched
        if (params.variant === "search") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE&query=${params.searchValue}&include_adult=false`)
                .then(response => response.json())
                .then(data => {
                    setMovieData(data.results);
                });
        }
        if (params.variant === "genre") {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${params.searchValue}`)
                .then(response => response.json())
                .then(data => {
                    setMovieData(data.results);
                });
        }
        if (params.variant === "trending") {
            fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE`)
                .then(response => response.json())
                .then(data => {
                    setMovieData(data.results);
                });
        }
        // dieser useEffect wird immer ausgeführt wenn sich die params ändern
    }, [params]);

    // diese I Abfrage vermeidet Fehlermeldungen (während der Fetch läuft ist movieData noch undefindet, damit es nicht beim mappen nicht zu Fehlermeldungen kommt wird hier returned wenn movieData noch undefined ist )
    if (movieData === undefined) return;

    return (
        <section className='SearchGenre-Wrapper'>
            <SearchBar />
            <GenreButton />
            <div className='sortBtnDiv'>
                <button className='sortBtn' type='button' onClick={SortAscending}>Sort by popularity ↓</button>
                <button className='sortBtn' type='button' onClick={SortDescending}>Sort by popularity ↑</button>
            </div>

            {movieData.map((singleMovieData, index) => {
                if (dataBaseFavs === undefined) return;
                // Hier wird mit der Datenbank abgeglichen welcher Film als Favorit gespeichert ist, den jeweiligen Elementen wird fav = true hinzugefügt
                dataBaseFavs.forEach((el) => {
                    if (el.id === singleMovieData.id) {
                        singleMovieData.fav = true;
                    }
                });

                return (
                    <GenreCard addToFavorites={addToFavorites} data={singleMovieData} index={index} dataBaseFavs={dataBaseFavs} />
                );
            })}
        </section>
    );
}

export default SearchGenre;