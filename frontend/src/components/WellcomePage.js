import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Switch } from '@headlessui/react';  


const WelcomePage = () =>{
    const [darkMode, setDarkMode] = useState(false);

    return (
       <div classname={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white': 
            'bg-gray-100 text-black'}`} style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="text-6xl font-bold mb-4 animate-pulse">Welcome to Vizionary</h1>
            <p className="text-lg mb-8">Your one-stop solution for data visualization.</p>
        <Button variant="contained" color="primary" component={Link} to="/DataVisualization">
         Go to Data Visualization
        </Button>
        <div className= 'mt-8'>
        <Switch
        cheked={darkMode}
        onChange={setDarkMode}
        className={`${darkMode ? 'bg-cyberpunk-green' : 'bg-cyberpunk-purble'} relative inline-flex items-center h6 rounded-full w-11 transition-colors duration-300 ease-in-out`}
        >
        <span className= "sr-only">Enable dark mode</span>
        <span className= {`${darkMode? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out`}></span>
        </Switch> 
        </div>
    </div>
    )
};
export default WelcomePage;    