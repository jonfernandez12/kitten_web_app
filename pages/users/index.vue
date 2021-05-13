
<script>
import {estado} from '../../store/user'

export default {
  name: 'app',
  data () {
    return {
      nombre : estado.estadoo(),//variable nombre que hacer referencia al valor del input
    }
  }/*,
  methods:{
    Guardar(){
      var persona = {nombre:estado.estadoo()} //creamos la variable personas, con la variable nombre y apellidos
      //Limpiamos los campos
      this.nombre = "";
    },
  }*/
}

/*
export default {
  
  data: () => ({}),
  async fetch({ store }) {
    var nombre = estado.estadoo()
    Guardar()
  }
}*/
</script>
<template>
  <v-card>
    <v-card-title>
      Usuario: 
      <td v-text="nombre"></td>
    </v-card-title>
  </v-card>
</template>



<style scoped></style>
