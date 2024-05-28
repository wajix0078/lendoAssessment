// PieChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [51.5, 23.2, 45.7, 51.5 ],
        backgroundColor: [
          'rgba(255, 103, 105, 1)',
          'rgba(255, 195, 89, 1)',
          'rgba(45, 145, 254, 1)',
          'rgba(75, 191, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 103, 105, 1)',
          'rgba(255, 195, 89, 1)',
          'rgba(45, 145, 254, 1)',
          'rgba(75, 191, 255, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options:any = {
    responsive: true,
  };

  return <Doughnut data={data} options={options} />;
};

export default PieChart;
