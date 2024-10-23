import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Importing the datalabels plugin

// Register ArcElement, Tooltip, Legend, and ChartDataLabels
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChart() {
  const data = {
    labels: ['Total Purchases', 'Total Sales', 'Returns', 'In Stock'],
    datasets: [
      {
        label: 'Inventory Distribution',
        data: [200, 150, 30, 50],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      datalabels: {
        color: '#000', // Label color
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((a, b) => a + b, 0); // Get total sum
          const percentage = ((value / total) * 100).toFixed(2) + '%'; // Calculate percentage
          return percentage;
        },
        font: {
          weight: 'bold',
          size: 14,
        },
        anchor: 'center',
        align: 'center',
      },
    },
  };

  return (
 
      <Pie data={data} options={options} />
  );
}
