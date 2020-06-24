<template>
  <div class="small" id="grafica">
    <h4>Desempeño anual de las solicitudes</h4>
    <div class="d-flex">
          <form @submit.prevent="filtrar" class="form-inline ml-auto mb-3">
              <input class="form-control" type="text" placeholder="Año" v-model="filtro">
              <!--<button class="btn btn-outline-primary my-2 my-sm-0" type="submit">buscar</button>-->
              <b-button variant="outline-danger" >Buscar</b-button>
          </form>
    </div>
    <line-chart2 v-if="loader == true" :chartData="datacollection2" :height="100"></line-chart2>
  </div>
</template>

<script>

import LineChart2 from './LineChart2.js'
import BarChart from './BarChart.js'

export default {
  props: ['ano'],
  components: {
    LineChart2,
    BarChart
  },
  data(){
    return {
      filtro: "",
      datacollection2: {},
      listaEspera2: [],
      listaAtendidos2: [],
      listaGlobales2: [],
      loader: false
    }
  },
  mounted () {
    console.log(this.ano);
    this.filtrar();
    
  },
  methods: {
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
    filtrar(){
      this.loader = false;
      axios.get('/api/estadisticas/'+this.ano, {headers: {Authorization: "Bearer "+ this.$store.state.token}}).then(response => {
        
        this.listaEspera2 = response.data.espera;
        this.listaAtendidos2 = response.data.atendidas;
        this.listaGlobales2 = response.data.globales;
        console.log(response.data);
        this.fillData2();
        this.loader = true;
      }).catch(e => {
        console.log(e.response);
      });
    },

  },
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