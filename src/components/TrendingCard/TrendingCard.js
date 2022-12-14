import './TrendingCard.css';
import { useRef, useState, useEffect } from 'react';
import star from '../img/RatingStar.svg';
import { Link } from 'react-router-dom';


function TrendingCard() {
    const delay = 3500;
    const [trendingData, setTrendingData] = useState();
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE`)
            .then(response => response.json())
            .then((data) => {
                setTrendingData(data.results.slice(0, 5));
            });
    }, []);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        if (trendingData === undefined) {
            return;
        }
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === trendingData.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index, trendingData]);

    if (trendingData === undefined) {
        return;
    }
    return (
        <section className='trendingCard-wrapper'>
            <h2 className='trendingCard-headline'>Trending Movies <Link to="/discover/trending/movie">See all</Link></h2>
            <div className="trendingCard-slideshow">
                <div
                    className="trendingCard-slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {trendingData.map((data, index) => (
                        <div
                            className="trendingCard-slide"
                            key={index}
                            style={{
                                background: `url(https://image.tmdb.org/t/p/w400/${data.poster_path})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className='trendingCard-TextContent'>
                                <h3>{data.title === undefined ? data.name : data.title}({data.media_type})</h3>
                                <p><img src={star} alt="RatingStar"></img>{(data.vote_average).toFixed(1)} / 10.0</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="trendingCard-slideshowDots">
                    {trendingData.map((_, idx) => (
                        <div
                            key={idx}
                            className={`trendingCard-slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrendingCard;

