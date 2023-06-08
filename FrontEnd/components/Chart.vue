<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { useFetch, useRuntimeConfig } from "#imports";
ChartJS.register(ArcElement, Tooltip, Legend);

const { data: areas } = await useFetch(useRuntimeConfig().public.baseURL + '/areas');
const totalInvestments = areas.value.map(area => area.totalInvestment);

const data = {
    name:'The work so far',
    labels: [ 'Renewable energy', 'Sustainable Tranport', 'Green building','Sustainable agriculture' ],
    datasets: [ { data: [totalInvestments[0], totalInvestments[1],totalInvestments[2],totalInvestments[3]],   
      backgroundColor: ['rgb(52, 77, 103)',
        'rgb(110, 204, 175)',
        'rgb(173, 231, 146)',
        'rgb(243, 236, 176)'],
        label: 'We already invested '
    }]
  
  }

  const options = {
    responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
               display: true,
               text: "The work so far",
            },
            colorschemes: {
                scheme: 'brewer.Paired12'
            }
        }
  }
</script>
