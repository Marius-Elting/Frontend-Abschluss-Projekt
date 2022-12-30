import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GenreCard from "../../components/GenreCard/GenreCard";
import './Favorites.css';
import ArrowLeft from '../../assets/icons/arrowLeft.png';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase';
import { UserAuth } from "../../context/AuthContext";



function Favorites({ Favorites }) {
    const { user } = UserAuth();
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState();
    const [useAbleFavs, setUseAbleFavs] = useState();
    const [number, setNumber] = useState(Favorites.lenght);
    // hier wird der ref festgelegt, mit diesem Ref kann auf die Datenbank zugegriffen werden
    const ref = collection(db, "MovieMania");

    // in dieser Funktion werden sich die Favoriten aus der Datenbank gezogen
    useEffect(() => {
        const getFavorites = async () => {
            const a = await getDocs(ref);
            setFavorites(a.docs.map((doc) => ({ ...doc.data(), docid: doc.id })));
        };
        getFavorites();

    }, [Favorites, number]);

    // hier werden die UseAbleFavs gesetzt (es werden nur favoriten ausgegeben die der jeweilige User gespeichert hat)
    useEffect(() => {
        if (favorites === undefined) return;
        setUseAbleFavs(favorites.filter(el => el.userID === user?.uid));
    }, [favorites]);

    // diese Funktion löscht einen ausgewählten Favoriten aus der Datenbank
    const deleteUse = async (id) => {
        const FavoDoc = doc(db, "MovieMania", id);
        await deleteDoc(FavoDoc);
        setNumber(id);
    };


    if (useAbleFavs === undefined) return;
    return (
        <div className="Favorites-Wrapper">
            <div className="FavoritesBtnAndHeading">
                <button className='favoritesBackButton' onClick={() => navigate(-1)}>
                    <img alt='img' src={ArrowLeft}></img>
                </button>
                <h1>Deine Favoriten</h1>
            </div>
            {useAbleFavs === [] ? "Leider keine Favoriten vorhanden" : ""}
            {useAbleFavs.map((data, index) => {
                data.fav = true;
                return (
                    <GenreCard data={data} index={index} page={"favo"} delteItem={deleteUse} fav={true} />
                );
            })}
        </div>
    );
}

export default Favorites;