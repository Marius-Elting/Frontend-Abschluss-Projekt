import { useNavigate } from "react-router-dom";
import GenreCard from "../../components/GenreCard/GenreCard";
import './Favorites.css';
import ArrowLeft from '../../assets/icons/arrowLeft.png';

function Favorites({ Favorites, favorites, deleteFavorite }) {
    const navigate = useNavigate();
    if (favorites === undefined) return;
    return (
        <div className="Favorites-Wrapper">
            <div className="FavoritesBtnAndHeading">
                <button className='favoritesBackButton' onClick={() => navigate(-1)}>
                    <img alt='img' src={ArrowLeft}></img>
                </button>
                <h1>Deine Favoriten</h1>
                <div></div>
            </div>
            {favorites === [] ? "Leider keine Favoriten vorhanden" : ""}
            {favorites.map((data, index) => {
                data.fav = true;
                return (
                    <GenreCard data={data} index={index} page={"favo"} delteItem={deleteFavorite} fav={true} />
                );
            })}
        </div>
    );
}

export default Favorites;