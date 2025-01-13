import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import { SnackbarProvider } from 'notistack';
import sampleData from './sampleData';
import DataVisaulization from './components/DataVisualization';


const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Routes>
          <Route  path="/" element={<WelcomePage/>} />
          <Route path="/data-visualization" element={<DataVisaulization data={sampleData}/>} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
