<template>
  <div id="app">
  <Header />
  <div class="bodyWeb" @load="displayImage">
    <h1>Home Page</h1>
    <div>
        <div class="w3-content">

            <button class="ButtonStart btn btn-dark btn-block w3-left" @click="nextImage" >start</button>
            <div class="w3-display-container Picture" v-for="user in users" :key="user.id">
                <img  class="mySlides" :src="user.image" :alt="user.name"  />
            </div>
            <button class="ButtonNo  btn btn-danger btn-block w3-left" @click="nextImage" >No</button>
            <button class="ButtonYes btn btn-success btn-block w3-right" @click="nextImage" >Yes</button>
        </div>


</div>
      </div>


  <Footer />
  </div>
</template>


<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import myJson from '../assets/data/users.json'
  import {MyFunctions} from "../assets/js/carousel";

  export default {
    components: {
      Header,
      Footer
    },
    data(){
      return{
        users: myJson
      };
    },
    methods: {
        displayImage: function () {
            MyFunctions.myFunction2(1);
        },
        nextImage: function () {
            MyFunctions.myFunction(1);
        }

    },
  };

</script>

<style>
  .bodyWeb{
    width: 50%;
    margin: auto;
    margin-top: 20px;
  }

    .ButtonNo, .ButtonYes {
        width: 40%;
        display: none;
    }
    .mySlides{
        display: none;
        height: 500px;
    }

</style>
