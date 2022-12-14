import { Link } from 'react-router-dom';
import './StartPage.css';

function StartPage() {
    return (
        <div>
            <div className='start-page-gradient'>
                <section className='start-page-top'>
                </section>
            </div>
            <section className='start-page-buttom'>
                <h1>Enjoy Your Movie <br />
                    Watch Everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                <Link to="/home" className='start-page-button'>Get Started</Link>
            </section>
        </div>
    );

}

export default StartPage;