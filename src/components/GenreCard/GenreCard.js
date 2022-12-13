import './GenreCard.css';
import GenreList from './GenreList.json';
import { Link } from 'react-router-dom';

function GenreCard({ data }) {
    const date = new Date(data.release_date);
    console.log(GenreList.genres);
    let genre = GenreList.genres.find((genre) => genre.id === data.genre_ids[0]);
    // console.log(cbd);

    return (
        <Link className="genreCard" to={`/details/${data.id}/${data.original_title}`}>

            <img className="genreCard-poster" src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={data.originale_title}></img>
            {/* <img className="genreCard-bookmark" src='./assets/icons/Star.svg'></img> */}

            <section className="genreCard-information">

                <article className="genreCard-movieTitle">
                    <h3 className="genreCard-title">{data.original_title}</h3>

                    <article>
                        <p className="genreCard-rating">{data.vote_average}</p>
                        <p className="genreCard-save">p</p>
                    </article>
                </article>

                <article className="genreCard-movieText">
                    <p className="genreCard-releaseYear">{date.getFullYear()}   {genre?.name}</p>

                </article>
            </section>

        </Link >
    );
}

export default GenreCard;