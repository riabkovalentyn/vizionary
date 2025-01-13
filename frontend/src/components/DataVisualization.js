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
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cyberpunk-light text-black">
        <div className="absolute inset-0 bg-cyberpunk-gradient opacity-50 animate-background-pan"></div>
        <h2 className= "text-4xl font-bold mb-4 animate-neon-glow z-10">Data Visualization</h2>
        <div className="w-full max-w-4xl z-10">
        <Bar data={chartData} options={options} />
        </div>   
    </div>
    );
};

export default DataVisaulization;
       