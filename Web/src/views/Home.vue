<template>
  <Header />
  <div class="bodyWeb">
    <h1>Home Page</h1>
    test
    <div>
      <div v-for="user in myJson">{{user}}</div>
    </div>
  </div>

  <Footer />
</template>


<script src="./src/vue.js"></script>
<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import users from '../assets/data/users.json'

  export default {
    components: {
      Header,
      Footer
    },
    data(){
      return{
        myJson: users
      }
    }

  };

</script>
<style>
  .bodyWeb{
    width: 50%;
    margin: auto;
    margin-top: 20px;
  }
</style>
