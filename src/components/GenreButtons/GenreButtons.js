import './GenreButtons.css';
import { Link } from 'react-router-dom';

function GenreButtons() {
    return (
        <section className='GenreButtonsWrapperSection'>
            <Link to={`/discover/genre/28`}><button>Action</button></Link>
            <Link to={`/discover/genre/35`}><button>Komödie</button></Link>
            <Link to={`/discover/genre/27`}><button>Horror</button></Link>
            <Link to={`/discover/genre/12`}><button>Abenteuer</button></Link>
            <Link to={`/discover/genre/16`}><button>Animation</button></Link>
            <Link to={`/discover/genre/80`}><button>Krimi</button></Link>
            <Link to={`/discover/genre/99`}><button>Dokumentarfilm</button></Link>
            <Link to={`/discover/genre/18`}><button>Drama</button></Link>
            <Link to={`/discover/genre/10751`}><button>Familie</button></Link>
            <Link to={`/discover/genre/14`}><button>Fantasy</button></Link>
            <Link to={`/discover/genre/36`}><button>Historie</button></Link>
            <Link to={`/discover/genre/10402`}><button>Musik</button></Link>
            <Link to={`/discover/genre/9648`}><button>Mystery</button></Link>
            <Link to={`/discover/genre/10749`}><button>Liebesfilm</button></Link>
            <Link to={`/discover/genre/878`}><button>Science Fiction</button></Link>
            <Link to={`/discover/genre/10770`}><button>TV-Film</button></Link>
            <Link to={`/discover/genre/53`}><button>Thriller</button></Link>
            <Link to={`/discover/genre/10752`}><button>Kriegsfilm</button></Link>
            <Link to={`/discover/genre/37`}><button>Western</button></Link>
        </section>
    );
}

export default GenreButtons;