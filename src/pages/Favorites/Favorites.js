import { useState, useEffect } from "react";
import GenreCard from "../../components/GenreCard/GenreCard";
import './Favorites.css';
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase';


function Favorites({ Favorites }) {
    const [favorites, setFavorites] = useState();

    const ref = collection(db, "MovieMania");
    useEffect(() => {
        const getFavorites = async () => {
            const a = await getDocs(ref);
            setFavorites(a.docs.map((doc) => ({ ...doc.data(), docid: doc.id })));
        };
        getFavorites();
    }, [Favorites]);

    const deleteUse = async (id) => {
        const FavoDoc = doc(db, "MovieMania", id);
        await deleteDoc(FavoDoc);
    };
    // deleteUse()
    console.log(favorites);
    if (favorites === undefined) return;
    return (
        <div className="Favorites-Wrapper">
            <h1>Deine Favoriten</h1>
            {favorites.map((data) => {

                return (
                    <GenreCard data={data} page={"favo"} delteItem={deleteUse} />
                );
            })}
        </div>
    );
}

export default Favorites;