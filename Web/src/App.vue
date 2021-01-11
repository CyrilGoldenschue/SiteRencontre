<template>
  <div id="app">

    <Header />
    <Welcome msg="PoneyLand"/>

  </div>
</template>

<script>
  import Welcome from './components/Welcome.vue'
  import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Welcome
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
