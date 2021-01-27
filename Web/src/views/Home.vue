<template>
  <div id="app">
  <Header />
  <div class="bodyWebHome" @load="displayImage">
    <div>
        <div class="w3-content" >

            <button class="ButtonStart btn btn-dark btn-block w3-left" @click="nextImage" >start</button>
            <div class="w3-display-container mySlides" v-for="user in users" :key="user.name" >
                <img class="Picture" :src="require('@/assets/img/users/' + user.image )"  :alt="user.name"  />
                <br>
                <b>{{user.firstname}} {{user.name}}</b><br>
                âge : {{user.morphology.age}} ans <br>
                poids : {{user.morphology.weight}} kg <br>
                taille : {{user.morphology.size}}  <br>
                silhouette : {{user.morphology.silhouette}}  <br>
                couleur de cheveux : {{user.morphology.hair_color}}  <br>
                couleur des yeux : {{user.morphology.eye_color}}  <br>
                genre recherché : {{user.morphology.search_gender}}  <br>
                type de relation : <div style="margin-left: 250px"><b>{{user.morphology.type_relation}}</b> <br>
                <img class="PictureRelation" :alt="user.morphology.type_relation" :src="require('@/assets/img/typeRelation/' + user.morphology.type_relation_image )">
            </div>


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
    }
  };

</script>

<style>
  .bodyWebHome{
    width: 33%;
    margin: auto;
    margin-top: 20px;
  }

    .ButtonNo, .ButtonYes {
        width: auto;
        display: none;
    }
    .mySlides{
        display: none;

    }
    .Picture{
        height: 400px;
    }
    .PictureRelation{
        height: 100px;
    }

</style>
