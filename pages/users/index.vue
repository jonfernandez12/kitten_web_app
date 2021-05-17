
<script>
import {estado, id, email} from '../../store/user'

export default {
  name: 'app',
  data () {
    return {
      id : id.idd(),
      email : email.emaill(),
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
      <ul>
        <li><p> Id: </p> 
      <td v-text="id"></td></li>
      <br>
        <li><p>Usuario:</p> 
      <td v-text="nombre"></td></li>
      <br> 
        <li><p>Email:</p> 
      <td v-text="email"></td></li>
      </ul>
    </v-card-title>
  </v-card>
</template>



<style scoped></style>
