import './GenreCard.css';
import GenreList from './GenreList.json';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Star from '../img/RatingStar.svg';
import Placeholder from '../img/Placeholder.png';
import BookmarkSymbol from '../img/BookmarkIcon.png';
import AddToFav from '../../assets/icons/AddToFav.svg';
import AddedToFav from '../../assets/icons/AddedToFav.svg';


function GenreCard({ data, index, addToFavorites, page, delteItem, dataBaseFavs }) {
    const date = new Date(data.release_date);
    let genre = GenreList.genres.find((genre) => genre.id === data.genre_ids[0]);
    return (
        <section key={index} className="genreCard">
            <Link className="genreCardLink" to={`/details/${data.id}/${data.original_title}`}>
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
                    </article>
                </section>
            </Link>
            <article className='genreCard-interactionButtons'>
                <img alt="Bookmarksybmol" onClick={(e) => {
                    if (data.fav) {
                        delteItem(data.docid);
                    } else {
                        addToFavorites(data); e.target.src = AddedToFav;
                    }
                }} className="genreCard-bookmark" src={data.fav ? AddedToFav : AddToFav}></img>
            </article>
        </section>
    );
}

export default GenreCard;