<template>
  <HeaderComponent id="ok" name="Vung 123 ok" :like="50" :isLove="true"/>
</template>

<script>
import HeaderComponent from './components/Header.vue'

export default {
  name: "App",
  components: {
    HeaderComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
