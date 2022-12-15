import './Detail.css';
import Return from "../../assets/icons/Return.svg";
import RatingStar from "../../assets/icons/RatingStar.svg";
import ButtonArrow from "../../assets/icons/ButtonArrow.svg";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';


function Detail() {
    let navigate = useNavigate();
    const [movieData, setMovieData] = useState();
    const [translationsData, setTranslationsData] = useState();
    const [videoLink, setVideoLink] = useState();
    const params = useParams();
    const TrailerRef = useRef();
    const [trailerVideo, setTrailerVideo] = useState();
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

        //Video-fetch
        fetch(`https://api.themoviedb.org/3/movie/${params.movieID}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE`)
            .then(response => response.json())
            .then(video => {
                console.log(video.results[0].key);
                setVideoLink(video.results[0].key);
            });
    }, [params]);

    const toHHMM = (totalMinutes) => {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
    };
    const padTo2Digits = (num) => {
        return num.toString().padStart(1, '0');
    };

    if (movieData === undefined) return;
    // console.log(movieData);
    // console.log(movieData.runtime);

    // function TrailerVideo() {

    //     return (

    //     );
    // }

    return (
        <div className='detailPage'>
            <div className='detailBackGroundContainer'
                style={{
                    background: `url(https://image.tmdb.org/t/p/original${movieData.poster_path})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundAttachment: "fixed",
                }} >
                <div className='backArrow'>
                    <button className='detailBackButton' onClick={() => navigate(-1)}>
                        <img alt='img' src={Return}></img>
                    </button>
                    {/* <Link to={`/discover/test/test`}>
                    </Link> */}
                    <p>Movie Details</p>
                </div>
                <div className='detailName' style={{
                    background: "linear-gradient(0deg, #fff, 83%,  transparent)"
                }}>
                    <div className='detailHeadingRating'>
                        <h2>{movieData.original_title}</h2>
                        <div className='detailReleaseRuntime'>
                            <p>{movieData.release_date} &#x2022;</p>
                            <p>&nbsp;{toHHMM(movieData.runtime)}</p>
                            {/* <p>&nbsp;{(movieData.runtime / 60).toFixed(2)}h</p> */}
                        </div>
                        <div className='starRating'>
                            <img alt='img' src={RatingStar}></img>
                            <p>&nbsp;{(movieData.vote_average).toFixed(1)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detailOverviewDiv'>
                <h3>Overview</h3>
                <div ><p className='detailCuttofP'>{movieData.overview}</p><input type="checkbox" className='seeMore'></input></div>
                <div className='detailGenreDiv'>
                    <p className='detailGenre'>Genre</p>
                    <div className='detailGenreGenresOutput'>
                        {movieData.genres.map((genre, i) => {
                            return (
                                <p key={i} className='detailGenreP'> {genre.name}{i === movieData.genres.length - 1 ? "" : ", "} &nbsp; </p>
                            );
                        })}
                    </div>
                </div>
                <div className='detailLanguage'> <p><span className='detailLanguageP'>Languages</span>{movieData.spoken_languages[0].english_name}</p></div>
            </div>
            <button onClick={() => {
                setTrailerVideo(<iframe className="detailIframe" title="Trailer" src={`https://www.youtube.com/embed/${videoLink}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" fullscreen="true" allowfullscreen="allowfullscreen" onLoad={(e) => { e.target.requestFullscreen(); }} onKeyDown={() => setTrailerVideo("")}></iframe>);

                document.body.addEventListener("keypress", (e) => {
                    setTrailerVideo("");
                });

            }} className='watchTrailer'>
                <img alt='img' src={ButtonArrow} />
                Watch Trailer
            </button>
            {trailerVideo}
        </div>
    );
};

export default Detail;