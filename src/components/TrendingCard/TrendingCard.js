import './TrendingCard.css';
import { useRef, useState, useEffect } from 'react';


function TrendingCard() {
    const delay = 2500;
    const [trendingData, setTrendingData] = useState();
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=de-DE`)
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
    }, [index]);

    if (trendingData === undefined) {
        return;
    }
    return (
        <section>
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {trendingData.map((data, index) => (
                        <div
                            className="slide"
                            key={index}
                            style={{ "background": `url(https://image.tmdb.org/t/p/w300/${data.backdrop_path})` }}
                        >
                            <p>{data.title === undefined ? data.name : data.title}({data.media_type})</p>
                            <p>{data.vote_average} / 10.0</p>
                        </div>
                    ))}
                </div>
                <div className="slideshowDots">
                    {trendingData.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
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

