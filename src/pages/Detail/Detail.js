import './Detail.css';
import Return from "../../assets/icons/Return.svg";
import RatingStar from "../../assets/icons/RatingStar.svg";
import ButtonArrow from "../../assets/icons/ButtonArrow.svg";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


function Detail() {
    let navigate = useNavigate();
    const [movieData, setMovieData] = useState();
    const [translationsData, setTranslationsData] = useState();
    const params = useParams();
    // console.log(params);

    useEffect(() => {
        // Moviedetails-fetch
        fetch(`https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE`)
            .then(res => res.json())
            .then(movieData => {
                // console.log(movieData);
                setMovieData(movieData);
            });

        // Translations-fetch
        fetch(`https://api.themoviedb.org/3/movie/${params.movieID}/translations?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(translationsData => {
                setTranslationsData(translationsData);
                // console.log(translationsData);
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
                    <button onClick={() => navigate(-1)}>
                        <img alt='img' src={Return}></img>
                    </button>
                    {/* <Link to={`/discover/test/test`}>
                    </Link> */}
                    <p>Movie Details</p>
                </div>
                <div className='detailName' style={{
                    background: "linear-gradient(0deg, rgb(221, 214, 214), transparent)"
                }}>
                    <p>{movieData.original_title}</p>
                    <p>{movieData.release_date}</p>
                    <p>{(movieData.runtime / 60).toFixed(2)}h</p>
                    <div>
                        <img alt='img' src={RatingStar}></img>
                        <p>{movieData.vote_average}</p>
                    </div>
                </div>
            </div>
            <div className='detailOverviewDiv'>
                <h2>Overview</h2>
                <p>{movieData.overview}<span> See more...</span></p>
                <div className='detailGenreDiv'>
                    <p className='detailGenre'>Genre</p>
                    {movieData.genres.map((genre, i) => {
                        return (
                            <p key={i} className='detailGenreP'>{genre.name}</p>
                        );
                    })}
                </div>

                <div className='detailLanguage'> <p>Languages {movieData.spoken_languages[0].english_name}</p></div>
            </div>
            <button>
                <img alt='img' src={ButtonArrow} />
                Watch Trailer
            </button>
        </div >
    );
};

export default Detail;