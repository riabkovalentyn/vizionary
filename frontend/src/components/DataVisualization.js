import React from "react";
import { Line } from 'react-chartjs-2'

const DataVisaulization = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [{
            labels: 'Data Over Time',
            data: data.map(item => item.value),
            boerderColor: 'rgb(75, 192, 192)',
            fill: false,

        },
        ],
    };
    
    return(
        <div>
      <h2>Data Visualization</h2>
      <Line data={chartData} />
        </div>
    );
};

export default DataVisaulization;
       