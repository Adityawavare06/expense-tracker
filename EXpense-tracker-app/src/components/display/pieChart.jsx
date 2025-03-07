// src/components/PieChart.js
import React from 'react';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useContext } from 'react';
import { GlobalContext } from '../../content';
// Register the components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart  () {
 const {  userName,value} = useContext(GlobalContext);
   console.log(userName);
   
  // Data for the Pie Chart

  const data = {
    labels: ['income ', 'expense'], // Labels for each slice
    datasets: [
      {
        label: 'My Dataset',
        data: [  userName, (value)], // Data for each slice
        backgroundColor: ['#FF6384', '#36A2EB'], // Colors for each slice
        hoverBackgroundColor: ['#FF6384', '#36A2EB'], // Hover colors
      },
    ],
  };

  // Options for the Pie Chart (optional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + ' units';
          },
        },
      },
    },
  };



  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-semibold mb-4">Pie Chart Example</h2>
      <div className="relative">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

 
