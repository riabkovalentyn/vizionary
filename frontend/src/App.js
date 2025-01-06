import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DataVisualization from './components/DataVisualization';
import WelcomePage from './components/WelcomePage';
import { SnackbarProvider } from 'notistack';


const App = () => {
  
  const dummyData = [
    { date: '2021-01-01', value: 100 },
    { date: '2021-01-02', value: 150 },
    { date: '2021-01-03', value: 200 },
  ];

  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/data-visualization">
            <DataVisualization />
          </Route>
        </Switch>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
