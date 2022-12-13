import './Detail.css';
import Return from "../../assets/icons/Return.svg";
import RatingStar from "../../assets/icons/RatingStar.svg";
import ButtonArrow from "../../assets/icons/ButtonArrow.svg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


function Detail() {
    const [movieData, setMovieData] = useState();
    const params = useParams();
    // console.log(params);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE`)
            .then(res => res.json())
            .then(movieData => {
                // console.log(movieData);
                setMovieData(movieData);
            });

    }, [params]);

    if (movieData === undefined) return;
    // console.log(movieData);

    return (
        <div className='detailPage'>
            <div className='detailBackGroundContainer'
                style={{
                    background: `url(https://image.tmdb.org/t/p/original${movieData.poster_path})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundAttachment: "fixed",
                }} >
                <div>
                    <Link to={`/discover/test/test`}>
                        <img src={Return}></img>
                    </Link>
                    <p>Movie Details</p>
                </div>
                <div className='detailName' style={{
                    background: "linear-gradient(0deg, rgb(221, 214, 214), transparent)"
                }}>
                    <p>{movieData.original_title}</p>
                    <p>{movieData.release_date}</p>
                    <p>{(movieData.runtime / 60).toFixed(2)}h</p>
                    <div>
                        <img src={RatingStar}></img>
                        <p>{movieData.vote_average}</p>
                    </div>
                </div>
            </div>
            <div className='detailOverviewDiv'>
                <h2>Overview</h2>
                <p>{movieData.overview}<span> See more...</span></p>
                <div className='detailGenres'><p>Genres {movieData.genres[0].name}</p></div>
                <div className='detailLanguage'> <p>Languages {movieData.spoken_languages[0].english_name}</p></div>
            </div>
            <button>
                <img src={ButtonArrow} />
                Watch Trailer
            </button>
        </div >
    );
};

export default Detail;;;