import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';  


const WelcomePage = () =>{
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to Vizionary</h1>
            <p>Your one-stop solution for data visualization.</p>
        <Button variant="contained" color="primary" component={Link} to="/data-visualization">
         Go to Data Visualization
        </Button>
    </div>
    )
};
export default WelcomePage;    