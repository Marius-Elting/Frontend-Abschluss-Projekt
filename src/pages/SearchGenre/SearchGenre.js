import './SearchGenre.css';
import { useEffect, } from 'react';
import { useParams } from 'react-router-dom';

function SearchGenre() {
    const params = useParams();

    useEffect(() => {
        if (params.searchValue === undefined) {
            return;
        }
        if (params.variant === "search") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE&query=${params.searchValue}&include_adult=false`)
                .then(response => response.json())
                .then(test => {
                    console.log(test);
                });
        }

    }, [params]);

    return;
}

export default SearchGenre;