<template>
  <div class="small">
    <h4>Desempeño en el año del usuario</h4>
    <line-chart :chartData="datacollection" :height="100"></line-chart>
  </div>
</template>

<script>

import LineChart from './LineChart.js'

export default {
  components: {
    LineChart
  },
  props: ['grafico'],
  data(){
    return {
      datacollection: null,
      listaEspera: [],
      listaAtendidos: [],
      listaGlobales: []
    }
  },
  mounted () {
    this.cantidadSolicitudes();
    
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

      axios.get('/api/perfiles/estadisticas/'+this.grafico).then(response => {

        this.listaEspera = response.data.espera;
        this.listaAtendidos = response.data.atendidas;
        this.listaGlobales = response.data.globales;
        this.fillData();
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
}
</style>