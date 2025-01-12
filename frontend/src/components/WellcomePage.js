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
            <p>Your one-stop solution for data visualization.</p>
        <Button variant="contained" color="primary" component={Link} to="/data-visualization">
         Go to Data Visualization
        </Button>
    </div>
    )
};
export default WelcomePage;    