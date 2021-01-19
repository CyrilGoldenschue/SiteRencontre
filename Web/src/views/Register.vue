<template>
    <Header/>
    <div class="bodyWeb">
    <h1> S'enregistrer </h1>

        <form>
            <table class="table">
                <tr>
                    <td><label>Nom</label></td>
                    <td><input type="text" class="form-control"  required></td>
                </tr>
                <tr>
                    <td><label>Adresse mail</label></td>
                    <td><input type="password" class="form-control" required></td>
                </tr>
                <tr>
                    <td><label>Mot de passe</label></td>
                    <td><input type="text" class="form-control"  required></td>
                </tr>
                <tr>
                    <td><button class="btn btn-danger btn-block">S'enregistrer !</button></td>
                    <td>ou <router-link class="active" to="/Login">se connecter</router-link>.</td>
                </tr>
            </table>
        </form>
    </div>
    <Footer/>
</template>
<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'

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

    .test {
        height: 100%;
    }
</style>