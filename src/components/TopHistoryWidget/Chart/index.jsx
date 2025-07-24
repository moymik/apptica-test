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
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
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
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1, 2, 3],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Chart({categoriesMap, chartData}) {

  let data = createData(categoriesMap,chartData);
  console.log(data)

  return <Line options={options} data={data}/>;
}

function createData(categoriesMap, chartData) {



  const datasets = [];
  for (let i in chartData.data) {
    const categoryName = categoriesMap[i]
    for(let k in chartData.data[i]) {
      const label = categoryName + ' - ' + subCategoriesMap[k];
      const data = Object.values(chartData.data[i][k]);
      datasets.push({label:label,data:data,backgroundColor:"red",borderColor:"red"});

    }

  }
  return {datasets,labels}
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
/*
*
*
*
*
*
*
*
* */