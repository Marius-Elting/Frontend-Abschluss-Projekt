import './Navigation.css';
import Profile from '../../assets/icons/Profile.svg';
import Bookmark from '../../assets/icons/Bookmark.svg';
import Download from '../../assets/icons/Download.svg';
import Home from '../../assets/icons/Home.svg';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <div className='navigation'>
            <Link to="/home">
                <img className='navLinkToHome' alt="Home Button" src={Home}></img>
            </Link>
            <Link to="/favorites">
                <img alt="Bookmark Button" src={Bookmark}></img>
            </Link>

            <img alt="Download Button" src={Download}></img>
            <img alt="Profile Button" src={Profile}></img>
        </div>
    );

}

export default Navigation;