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
        <div>
            <h1>Willkommen, {user?.displayName}</h1>
            {user?.displayName ? <button onClick={handleSignOut}>Ausloggen</button> : <GoogleButton onClick={handleGoogleSignIn} />}
        </div>
    );
}


export default LoginPage;