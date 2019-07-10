<template>
  <v-app>
    <v-toolbar app :color="color">
      <router-link to="/pucv" class="router-link">
        <v-toolbar-title :class="titleclass">
          <span>PUCV</span>
          <span class="font-weight-light">SEMAFORO WIFI</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn icon v-if="this.$store.getters.theming === 'dark'" @click="setLightTheme()">
        <v-icon color="white">format_color_fill</v-icon>
      </v-btn>

      <v-btn icon v-else @click="setDarkTheme()">
        <v-icon color="black">format_color_fill</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content :class="backclass">
      <router-view></router-view>
    </v-content>

    <v-footer class="pa-3" :color="color">
      <v-spacer></v-spacer>
      <div :class="footerText">&copy; {{ new Date().getFullYear() }} - Pontificia Universidad Católica de Valparaíso</div>
  </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      color: '#1f1f1f',
      titleclass: 'headline text-uppercase white--text',
      backclass: 'darkBack',
      footerText: 'white--text'
    }
  },
  methods: {
    setLightTheme(){
      this.$store.dispatch('setLightTheme')
      this.color = "#ffffff"
      this.titleclass = "headline text-uppercase black--text"
      this.backclass = "lightBack"
      this.footerText = "black--text"
    },
    setDarkTheme(){
      this.$store.dispatch('setDarkTheme')
      this.color = "#1f1f1f"
      this.titleclass = "headline text-uppercase white--text"
      this.backclass = "darkBack"
      this.footerText = "white--text"
    }
  }
}
</script>

<style scoped>
.darkBack{
  /* background-color: #f1f1f1; */
  background-color: #121212;
}

.lightBack {
  background-color: #fafafa;
}

.router-link{
  text-decoration: none;
}
</style>
