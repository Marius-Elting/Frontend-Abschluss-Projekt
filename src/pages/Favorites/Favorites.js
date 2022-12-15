import { useState, useEffect } from "react";

function Favorites({ Favorites }) {
    const [movieData, setMovieData] = useState();
    console.log(Favorites);



    var unique = Array.from(new Set(Favorites));
    console.log(unique);

    return (<div>
        <h1>Deine Favoriten</h1>
        {unique.map((data) => {
            console.log(data);
            return (
                <div>
                    <h1>{data.title}</h1>;
                </div>
            );
        })}
    </div>
    );
}

export default Favorites;