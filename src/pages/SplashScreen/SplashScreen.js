import './SplashScreen.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SplashScreen() {
    const splashScreen = useNavigate();

    useEffect(() => {
        setTimeout(() => splashScreen("/start", { replace: true }), 5000);
    }, []);

    return (
        <div className='splashContainer'>
            <p className='line-1'>🍿</p>
            <p className="line-2 anim-typewriter">Movie Mania</p>
        </div>
    );

}

export default SplashScreen;


