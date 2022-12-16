import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GenreCard from "../../components/GenreCard/GenreCard";
import './Favorites.css';
import ArrowLeft from '../../assets/icons/arrowLeft.png';
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase';
import { UserAuth } from "../../context/AuthContext";



function Favorites({ Favorites }) {
    const { user } = UserAuth();
    // console.log(user);
    // const user = "";
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState();
    const [useAbleFavs, setUseAbleFavs] = useState();
    const [number, setNumber] = useState(Favorites.lenght);

    const ref = collection(db, "MovieMania");
    useEffect(() => {
        const getFavorites = async () => {
            const a = await getDocs(ref);
            setFavorites(a.docs.map((doc) => ({ ...doc.data(), docid: doc.id })));
        };
        getFavorites();
        console.log(favorites);

    }, [Favorites, number]);

    useEffect(() => {
        if (favorites === undefined) return;
        setUseAbleFavs(favorites.filter(el => el.userID === user?.uid));
    }, [favorites]);

    const deleteUse = async (id) => {
        const FavoDoc = doc(db, "MovieMania", id);
        await deleteDoc(FavoDoc);
        console.log("delete item" + id);
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