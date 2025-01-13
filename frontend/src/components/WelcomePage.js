import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react';  


const WelcomePage = () =>{
    const [darkMode, setDarkMode] = useState(false);

    return (
       <div classname={`relative flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-cyberpunk-dark text-white' : 'bg-cyberpunk-light text-black'}`} style={{ textAlign: 'center', marginTop: '50px' }}>
            <div className="absolute inset-0 bg-cyberpunk-gradient opacity-50 animate-background-pan"></div>
                <h1 className="text-6xl font-bold mb-4 animate-neon-glow z-10">Welcome to Vizionary</h1>
                <p className="text-lg mb-8 z-10">Your one-step solution for data visualization.</p>
            <Link to="/data-visualization">
            <button className="bg-cyberpunk-pink text-white px-6 py-3 rounded-full animate-pulse hover:bg-cyberpunk-blue transition duration-500 ease-in-out z-10">
            Go to Data Visualization
            </button>
            </Link>    
            <div className= 'mt-8'>
            <Switch
            cheked={darkMode}
            onChange={setDarkMode}
            className={`${darkMode ? 'bg-cyberpunk-green' : 'bg-cyberpunk-purple'} relative inline-flex items-center h6 rounded-full w-11 transition-colors duration-300 ease-in-out`}
            >
            <span className= "sr-only">Enable dark mode</span>
            <span className= {`${darkMode? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out`}></span>
            </Switch> 
            </div>
    </div>
    )
};
export default WelcomePage;    