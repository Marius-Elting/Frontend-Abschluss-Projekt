import { useState, useEffect } from "react";
import GenreCard from "../../components/GenreCard/GenreCard";
import './Favorites.css';

function Favorites({ Favorites }) {

    return (
        <div className="Favorites-Wrapper">
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