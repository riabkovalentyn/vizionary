import React from 'react';
import DataUpload from './components/DataUpload';
import DataVisualization from './components/DataVisualization';

const App = () => {
  const dummyData = [
    { date: '2021-01-01', value: 100 },
    { date: '2021-01-02', value: 150 },
    { date: '2021-01-03', value: 200 },
  ];

  return (
    <div>
      <h1>DataScope</h1>
      <DataUpload />
      <DataVisualization data={dummyData} />
    </div>
  );
};

export default App;
