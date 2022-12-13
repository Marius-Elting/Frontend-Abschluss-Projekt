import './GenreCard.css';
import GenreList from './GenreList.json';
import { Link } from 'react-router-dom';

function GenreCard({ data }) {
    const date = new Date(data.release_date);
    console.log(GenreList.genres);
    let genre = GenreList.genres.find((genre) => genre.id === data.genre_ids[0]);
    // console.log(cbd);

    return (
        <Link to={`/details/${data.id}/${data.original_title}`}>
            <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={data.originale_title}></img>
            <h3>{data.original_title}</h3>
            <p>{data.vote_average}</p>
            <p>{date.getFullYear()}</p>
            <p>{genre.name}</p>
        </Link>
    );
}

export default GenreCard;