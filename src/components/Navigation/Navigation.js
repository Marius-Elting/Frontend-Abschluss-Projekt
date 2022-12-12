import './Navigation.css';
import Profile from '../../assets/icons/Profile.svg'
import Bookmark from '../../assets/icons/Bookmark.svg'
import Download from '../../assets/icons/Download.svg'
import Home from '../../assets/icons/Home.svg'
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <div className='navigation'>
            <Link to="/home">
                <img src={Home}></img>
            </Link>
            <img src={Bookmark}></img>
            <img src={Download}></img>
            <img src={Profile}></img>
        </div>
    )

}

export default Navigation;