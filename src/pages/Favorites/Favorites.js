import { useState, useEffect } from "react";
import GenreCard from "../../components/GenreCard/GenreCard";

function Favorites({ Favorites }) {

    return (
        <div>
            <h1>Deine Favoriten</h1>
            {Favorites.map((data) => {

                return (
                    <GenreCard data={data} />
                );
            })}
        </div>
    );
}

export default Favorites;