<template>
    
    <Doughnut 
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />

  </template>
  
  <script>
 import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
 import { Doughnut } from 'vue-chartjs'
 //import 'chartjs-plugin-colorschemes'
// import { Colors } from 'chart.js';

//ChartJS.register(Colors);
ChartJS.register(ArcElement, Tooltip, Legend)
  
  
  export default {
    name: 'Chart',
    components: { Doughnut },
    data() {
      return {
        chartData: {
          labels: [ 'Renewable energy', 'Sustainable Tranport', 'Green building','Sustainable agriculture' ],
          
          datasets: [ { data: [500000, 750000, 1000000,750000], 
            fill:true,
          backgroundColor: ['rgb(52, 77, 103)',
            'rgb(110, 204, 175)',
            'rgb(173, 231, 146)',
            'rgb(243, 236, 176)'],
            label: 'We already invested: '
        } 
        
        
        ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            colorschemes: {
                scheme: 'brewer.Paired12'
            }
        }
        }
      }
    }
  }
  </script>