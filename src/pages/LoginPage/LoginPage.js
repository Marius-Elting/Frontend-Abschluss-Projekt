import './LoginPage.css';
import GoogleButton from "react-google-button";
import { UserAuth } from "../../context/AuthContext";


function LoginPage() {
    const { googleSignIn } = UserAuth();
    const { user, logOut } = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

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
        </div>
    );
}


export default LoginPage;