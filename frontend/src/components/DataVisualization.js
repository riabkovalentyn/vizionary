import React from "react";
import { Line } from 'react-chartjs-2'

const DataVisaulization = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            labels: 
            data: data.map(item => item.value),

        ]
    }
}