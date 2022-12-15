import './GenreCard.css';
import GenreList from './GenreList.json';
import { Link } from 'react-router-dom';
import Star from '../img/RatingStar.svg';
import Placeholder from '../img/Placeholder.png';
import BookmarkSymbol from '../img/BookmarkIcon.png';


function GenreCard({ data, index, addToFavorites }) {
    const date = new Date(data.release_date);
    let genre = GenreList.genres.find((genre) => genre.id === data.genre_ids[0]);
    return (
        <Link key={index} className="genreCard" to={`/details/${data.id}/${data.original_title}`}>
            <img className="genreCard-poster" src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} onError={(e) => { e.onerror = null; e.target.src = Placeholder; }} alt={data.originale_title}></img>
            <section className="genreCard-information">
                <article className="genreCard-movieTitle">
                    <h3 className="genreCard-title">{data.original_title}</h3>
                    <article>
                        <img className="starImg" alt="star" src={Star}></img>
                        <p className="genreCard-rating">{data.vote_average.toFixed(1)}</p>
                    </article>
                </article>
                <article className="genreCard-movieText">
                    <p className="genreCard-releaseYear">{date.getFullYear()} &nbsp;  {genre?.name}</p>
                    <img alt="Bookmarksybmol" onClick={() => addToFavorites(data)} className="genreCard-bookmark" src={BookmarkSymbol}></img>
                </article>
            </section>
        </Link>
    );
}

export default GenreCard;