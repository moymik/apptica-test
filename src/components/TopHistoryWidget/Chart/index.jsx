import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
    colors: {
      enabled: true,
    }
  },
};


export default function Chart({categoriesMap, chartData}) {
  let data = createData(categoriesMap, chartData);
  console.log('data generated')
  return <Line options={options} data={data}/>;
}


function createData(categoriesMap, chartData) {
  const datasets = [];
  let labels = null;
  for (let i in chartData.data) {
    const categoryPrimaryName = categoriesMap[i]
    for (let k in chartData.data[i]) {
      if (labels === null) {
        console.log(1)
        labels = Object.keys(chartData.data[i][k]).map(date=>formatDate(date));
      }
      const categoryName = categoryPrimaryName + ' - ' + subCategoriesMap[k];
      const data = Object.values(chartData.data[i][k]);
      datasets.push({label: categoryName, data: data});
    }
  }
  return {datasets, labels}
}

//Для отображения подписей
function formatDate(inputDate) {
  const months = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ];

  const date = new Date(inputDate);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

const subCategoriesMap = {
  1: 'Top Fee',
  2: 'Top Paid',
  3: 'Top Grossing',
  4: 'Top Free',
  5: 'Top Paid',
  6: 'Top Grossing',
  7: 'New Free',
  8: 'New Paid',
  9: 'Trending'
}
