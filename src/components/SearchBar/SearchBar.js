import './SearchBar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function SearchBar() {
    const [searchInput, setSearchInput] = useState();
    const [movieData, setMovieData] = useState();

    useEffect(() => {
        // Sorgt dafür, dass beim erstmaligen Rendern kein fetch durchgeführt wird
        if (searchInput === undefined) {
            return;
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE&query=${searchInput}&include_adult=false`)
            .then(response => response.json())
            .then(movieData => {
                setMovieData(movieData);
                // console.log(movieData);
            });
    }, [searchInput]);

    // Sobald die Eingabetaste ("Enter") drückt, wird der Inhalt des Eingabefelds als Suchbegriff verwendet und an die setSearchInput-Funktion übergeben, um die Suche auszuführen.
    function handleInput(e) {
        if (e.key === "Enter") {
            setSearchInput(e.target.value);
        }
    }

    return (
        <div>
            <input placeholder="Search Movie..." onKeyDown={handleInput}></input>
        </div>
    );
};




export default SearchBar;