import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WelcomePage } from './components/WelcomePage';
import { SnackbarProvider } from 'notistack';
import SampleData from './sampleData';
import DataVisaulization from './components/DataVisualization';


const App : React.FC = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Routes>
          <Route  path="/" element={<WelcomePage/>} />
          <Route path="/data-visualization" element={<DataVisaulization data={SampleData}/>} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
