import './SearchBar.css';
import React, { useState, useEffect } from 'react';


function SearchBar() {
    const [searchInput, setSearchInput] = useState();

    useEffect(() => {
        if (searchInput === undefined) {
            return
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE&query=${searchInput}&include_adult=false`)
            .then(response => response.json())
            .then(test => {
                console.log(test);
            });
    }, [searchInput])

    function handleInput(e) {
        if (e.key === "Enter") {
            setSearchInput(e.target.value);
            // console.log(e.target.value)
        }
    }

    return (
        <div>
            <input placeholder="Search Movie..." onKeyDown={handleInput}></input>
        </div>
    )
};





export default SearchBar;