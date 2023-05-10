import './GenreButtons.css';
import { Link } from 'react-router-dom';

function GenreButtons({ params }) {
    return (
        // Hier werden die Buttons erstellt, die auf die Suche weiterleiten und die entsprechende Suchmethode und der Suchbegriff werden mitgegeben
        <section className='GenreButtonsWrapperSection'>
            <Link to={`/discover/genre/28`}><button className={params?.searchValue === "28" && "active"}>Action</button></Link>
            <Link to={`/discover/genre/35`}><button className={params?.searchValue === "35" && "active"}>Komödie</button></Link>
            <Link to={`/discover/genre/27`}><button className={params?.searchValue === "27" && "active"}>Horror</button></Link>
            <Link to={`/discover/genre/12`}><button className={params?.searchValue === "12" && "active"}>Abenteuer</button></Link>
            <Link to={`/discover/genre/16`}><button className={params?.searchValue === "16" && "active"}>Animation</button></Link>
            <Link to={`/discover/genre/80`}><button className={params?.searchValue === "80" && "active"}>Krimi</button></Link>
            <Link to={`/discover/genre/99`}><button className={params?.searchValue === "99" && "active"}>Dokumentarfilm</button></Link>
            <Link to={`/discover/genre/18`}><button className={params?.searchValue === "18" && "active"}>Drama</button></Link>
            <Link to={`/discover/genre/10751`}><button className={params?.searchValue === "10751" && "active"}>Familie</button></Link>
            <Link to={`/discover/genre/14`}><button className={params?.searchValue === "14" && "active"}>Fantasy</button></Link>
            <Link to={`/discover/genre/36`}><button className={params?.searchValue === "36" && "active"}>Historie</button></Link>
            <Link to={`/discover/genre/10402`}><button className={params?.searchValue === "10402" && "active"}>Musik</button></Link>
            <Link to={`/discover/genre/9648`}><button className={params?.searchValue === "9648" && "active"}>Mystery</button></Link>
            <Link to={`/discover/genre/10749`}><button className={params?.searchValue === "10749" && "active"}>Liebesfilm</button></Link>
            <Link to={`/discover/genre/878`}><button className={params?.searchValue === "878" && "active"}>Science Fiction</button></Link>
            <Link to={`/discover/genre/10770`}><button className={params?.searchValue === "10770" && "active"}>TV-Film</button></Link>
            <Link to={`/discover/genre/53`}><button className={params?.searchValue === "53" && "active"}>Thriller</button></Link>
            <Link to={`/discover/genre/10752`}><button className={params?.searchValue === "10752" && "active"}>Kriegsfilm</button></Link>
            <Link to={`/discover/genre/37`}><button className={params?.searchValue === "37" && "active"}>Western</button></Link>
        </section>
    );
}

export default GenreButtons;