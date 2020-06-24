<template>
  <div class="small" id="grafica">
  
    <h4>Estadisticas del año {{año}}</h4>
    <line-chart v-if="loader2 == true" :chartData="datacollection2" :height="100"></line-chart>
    
  </div>
</template>

<script>

import LineChart from './LineChart.js'
import BarChart from './BarChart.js'

export default {
  components: {
    LineChart,
    BarChart
  },
  data(){
    return {
      datacollection: {},
      listaEspera: [],
      listaAtendidos: [],
      listaGlobales: [],
      filtro: null,
      datacollection2: {},
      listaEspera2: [],
      listaAtendidos2: [],
      listaGlobales2: [],
      loader: false,
      loader2: false,
      año: 0
    }
  },
  mounted () {
    //his.cantidadSolicitudes();
    this.filtrar();
    
  },
  methods: {
    fillData ()
    {
      this.datacollection = {
        labels: ['Enero','Febrero','Marzo','Abril','Mayo', 'Junio' , 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Solicitudes en espera',
            backgroundColor: '#EC250A',
            data: this.listaEspera
          },
          {
            label: 'Solicitudes atentidas',
            backgroundColor: '#7934FA',
            data: this.listaAtendidos
          },
          {
            label: 'Solicitudes totales',
            backgroundColor: '#173FE7',
            data: this.listaGlobales
          }
        ]
      }
    },
    fillData2()
    {
      this.datacollection2 = {
        labels: ['Enero','Febrero','Marzo','Abril','Mayo', 'Junio' , 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Solicitudes en espera',
            backgroundColor: '#EC250A',
            data: this.listaEspera2
          },
          {
            label: 'Solicitudes atentidas',
            backgroundColor: '#7934FA',
            data: this.listaAtendidos2
          },
          {
            label: 'Solicitudes totales',
            backgroundColor: '#173FE7',
            data: this.listaGlobales2
          }
        ]
      }
    },
    cantidadSolicitudes(){

      axios.get('/api/estadisticas', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
        this.loader = false
        this.listaEspera = response.data.espera;
        this.listaAtendidos = response.data.atendidas;
        this.listaGlobales = response.data.globales;
        this.fillData();
        this.loader = true;
      }).catch(e => {
        console.log(e.response);
      });
    },
    filtrar(){

      axios.get('/api/estadisticaspasada', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
        this.loader2 = false;
        this.listaEspera2 = response.data.espera;
        this.listaAtendidos2 = response.data.atendidas;
        this.listaGlobales2 = response.data.globales;
        console.log(response);
        this.fillData2();
        this.año = response.data.año;
        this.loader2 = true;
      }).catch(e => {
        console.log(e.response);
      });
    },

  },
  watch: {
  chartData () {
    this.$data._chart.update()
  }
}
}
</script>

<style lang="css">
.small {
  max-width: 800px;
  /* max-height: 500px; */
  margin:  50px auto;
  background-color: rgba(255,255,255,0.9);
}
</style>