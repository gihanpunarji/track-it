import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function StockAnalysisChart() {
  const data = {
    labels: ["iPhone 14", "Samsung Galaxy S22", "Google Pixel 7", "OnePlus 10", "Xiaomi 12", "Oppo Find X5"],
    datasets: [
      {
        label: 'Stock Sold',
        data: [120, 90, 70, 50, 40, 30], 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Quantity Sold',
          font: {
            weight: 'bold',
          },
        },
      },
    },
  };

  return (

      <Line data={data} options={options} />
  );
}
