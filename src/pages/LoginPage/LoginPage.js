import './LoginPage.css';
import GoogleButton from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { Link } from 'react-router-dom';


function LoginPage() {
    const { googleSignIn } = UserAuth();
    const { user, logOut } = UserAuth();

    // Funktion zum Einloggen
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    // Funktion zum Ausloggen
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="loginDiv">
            <h1 className="loginHeading" >Willkommen, {user?.displayName}</h1>
            {user?.displayName ? <button className='loginBtn' onClick={handleSignOut}>Ausloggen</button> : <GoogleButton className='loginGoogleBtn' onClick={handleGoogleSignIn} />}
            <p>mit dem Login akzeptierst du unsere <Link to="/datenschutz">Datenschutzerklärung</Link></p>
        </div>
    );
}


export default LoginPage;