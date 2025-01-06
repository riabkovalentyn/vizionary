import React from "react";
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DataVisaulization = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [{
            labels: 'Dataset ',
            data: data.map(item => item.value),
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,

        },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend:{
                position: 'top',
            },
            title: {
                display: true,
                text: 'Data Visaulization',
            },
        },
    }    
    return(
        <div>
      <h2>Data Visualization</h2>
      <Bar data={chartData} options={options} />
        </div>
    );
};

export default DataVisaulization;
       