import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement);

const GraduationChart = () => {
  // Sample data: replace with actual data
  const academicYears = ['2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024'];
  const graduates = [120, 180, 200, 210, 240]; // Replace with actual graduation numbers for each year

  // Chart data for both Bar and Line charts
  const data = {
    labels: academicYears,
    datasets: [
      {
        label: 'Number of Graduates',
        data: graduates,
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Options for the charts
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to fit better in smaller containers
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Graduates per Academic Year',
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="chart-header">Graduation Statistics</h2>
      {/* Bar Chart */}
      <div className="chart" style={{ height: '200px' }}>
        <Bar data={data} options={options} />
      </div>
      {/* Line Chart */}
      <div className="chart" style={{ height: '200px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GraduationChart;
