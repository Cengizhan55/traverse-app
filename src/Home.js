import React from "react";
import './Home.css'
import { Link } from 'react-router-dom';

const HomePage = () => { 
    return(
        <div className="landing-root">
            <div className='landing-left'>
                <h1 className='landing-header'>View attractions, hotels and restaurants anywhere in the world!</h1>
                <p className='landing-para'><b>Traverse</b> is a free and easy to use web application that uses <i>Google Maps</i> to easily show you nearby recommended attractions. Use the button to get started.</p>
                <Link to='/map'><button className='landing-button'>Start</button></Link>
            </div>
        </div>
    );
}



export default HomePage;