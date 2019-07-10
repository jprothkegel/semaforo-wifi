<template>
    <v-layout>
        <v-flex xs12>
            <v-container grid-list-xl>
                <div v-if="this.$store.getters.theming === 'dark'" class="title white--text">PUCV</div>
                <div v-else class="title black--text">PUCV</div>
                <v-layout row wrap align-center class="mt-2">
                    <v-flex xs12 md3 v-for="item in items" :key="item.name">
                        <home-page-card
                        :image = 'item.img'
                        :title = 'item.name'
                        :buildings = 'item.buildings'
                        :roomId = 'item.id'>
                        </home-page-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
import HomePageCard from '../components/HomePageCard'
export default {
  data(){
      return{
          items:[
              {name: 'Casa Central', img: 'http://dpd.pucv.cl/wp-content/uploads/2018/10/casa-central.jpg', id: 'cc', buildings:[
                  {name: 'Casa Central'},
                  {name: 'Edificio Gimpert'},
                  {name: 'Ruben Castro'}
              ]},
              {name: 'Facultad Ingeniería', img: 'http://www.pucv.cl/uuaa/site/artic/20160419/imag/foto_0000000120160419201450.jpg', id: 'fin', buildings: [
                  { name: 'EIB'},
                  { name: 'FIN'},
                  { name: 'EIQ'},
                  { name: 'IBC'},
              ]},
              {name: 'Curauma', img: 'https://www.pucv.cl/uuaa/site/artic/20160802/imag/foto_0000000120160802132110.png', id: 'cur', buildings: [
                  { name: 'Aulario'},
                  { name: 'Ciencias Básicas'},
                  { name: 'Periodismo'},
                  { name: 'Biblioteca'},
                  { name: 'Kinesiología'},
                  { name: 'T. Médica'},
              ]},
              {name: 'Sausalito', img: 'http://www.pucv.cl/pucv/site/artic/20150630/imag/foto_0000000120150630151900.jpg', id: 'sau', buildings:[
                  { name: 'Edificio A'},
                  { name: 'Edificio B'},
                  { name: 'Edificio C'},
                  { name: 'Edificio I'},
                  { name: 'Biblioteca'},
                  { name: 'Casino'},
              ]},
              {name: 'Escuela de Ciencias del Mar', img: 'http://www.pucv.cl/pucv/site/artic/20150703/imag/foto_0000000220150703141016.jpg', id: 'rrnn', buildings: []},
              {name: 'Arquitectura y Diseño', img: 'http://www.pucv.cl/pucv/site/artic/20150703/imag/foto_0000000120150703094347.jpg', id: 'arq', buildings:[]},
              {name: 'Escuela de Agronomía', img: 'http://dpd.pucv.cl/wp-content/uploads/2018/10/casa-central.jpg', id: 'agr', buildings: []},
              {name: 'Instituto de Matematicas', img: 'http://prensa.ucv.cl/wp-content/uploads/2012/07/Instituto-de-Matem%C3%A1ticas-1-300x225.jpg', id:'mat', buildings: []},
              {name: 'Instituto de Historia', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Instituto_de_Historia_PUCV.jpg/800px-Instituto_de_Historia_PUCV.jpg', id: 'his', buildings: []},
              {name: 'Instituto de Arte', img: 'http://dpd.pucv.cl/wp-content/uploads/2018/10/casa-central.jpg', id: 'art', buildings:[]},
              {name: 'Escuela de Ingeniería Mecánica', img: 'http://www.pucv.cl/uuaa/site/artic/20151215/imag/foto_0000000220151215120035.jpg', id: 'mec', buildings:[]},
              {name: 'Instituto de Música', img: 'https://yellow.place/file/image/cover/0/0/899/exhfsjwsxbtnpbym.jpg', id: 'mus', buildings: []},
              
          ]
      }
  },
  components: {
      HomePageCard
  }
}
</script>

