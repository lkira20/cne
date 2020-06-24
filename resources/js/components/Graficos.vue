<template>
  <div class="small" id="grafica">
    <h4>Desempeño anual de las solicitudes en el año actual</h4>
    <!--
    <div class="d-flex">
          <form @submit.prevent="filtrar" class="form-inline ml-auto mb-3">
              <input class="form-control" type="text" placeholder="Año" v-model="filtro">

              <b-button variant="outline-danger" :to="{name: 'filtro', params: {ano: filtro}}">Buscar</b-button>
          </form>
    </div>
     -->
    <line-chart v-if="loader == true" :chartData="datacollection" :height="100"></line-chart>

    
  </div>
</template>

<script>

import LineChart from './LineChart.js'
import BarChart from './BarChart.js'
import Graficospasado from './Graficospasado'

export default {
  components: {
    LineChart,
    BarChart,
    Graficospasado
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
    this.cantidadSolicitudes();
    //this.filtrar();
    
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
    cantidadSolicitudes(){

      axios.get('/api/estadisticas', {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
        this.loader = false
        this.listaEspera = response.data.espera;
        this.listaAtendidos = response.data.atendidas;
        this.listaGlobales = response.data.globales;
        this.fillData();
        console.log(response.data);
        this.loader = true;
      }).catch(e => {
        console.log(e.response);
      });
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