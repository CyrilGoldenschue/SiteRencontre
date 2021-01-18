<template>
  <Header />
  <h1>Home Page</h1>
  <Footer />
</template>
<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  body {
    margin : 0;
  }

</style>