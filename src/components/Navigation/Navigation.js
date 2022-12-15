import './Navigation.css';
import Profile from '../../assets/icons/Profile.svg';
import Bookmark from '../../assets/icons/Bookmark.svg';
import Download from '../../assets/icons/Download.svg';
import Home from '../../assets/icons/Home.svg';
import GrayHome from '../../assets/icons/GrayHome.svg';
import { Link } from 'react-router-dom';
import RedBookmark from '../../assets/icons/Bookmark-svg-red.svg';


function Navigation({ page }) {
    return (
        <div className='navigation'>
            <Link to="/home">
                <img className='navLinkToHome' alt="Home Button" src={page !== "home" ? GrayHome : Home}></img>
            </Link>
            <Link to="/favorites">
                <img alt="Bookmark Button" className='navBookmark' src={page === "favo" ? RedBookmark : Bookmark}></img>
            </Link>
            <img alt="Download Button" src={Download}></img>
            <img alt="Profile Button" src={Profile}></img>
        </div>
    );
}

export default Navigation;