import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GenreCard from "../../components/GenreCard/GenreCard";
import './Favorites.css';
import ArrowLeft from '../../assets/icons/arrowLeft.png';

function Favorites({ Favorites }) {
    let navigate = useNavigate();

    return (
        <div className="Favorites-Wrapper">
            <div className="FavoritesBtnAndHeading">
                <button className='favoritesBackButton' onClick={() => navigate(-1)}>
                    <img alt='img' src={ArrowLeft}></img>
                </button>
                <h1>Deine Favoriten</h1>
            </div>
            {Favorites.map((data) => {
                return (
                    <GenreCard data={data} />
                );
            })}
        </div>
    );
}

export default Favorites;