<template>
    <Header/>
    <div class="bodyWeb">
        <h1> Se connecter </h1>

        <form>
            <table class="table">
                <tr>
                    <td><label>Adresse mail</label></td>
                    <td><input type="password" class="form-control" required></td>
                </tr>
                <tr>
                    <td><label>Mot de passe</label></td>
                    <td><input type="text" class="form-control"  required></td>
                </tr>
                <tr>

                    <td><router-link class="active" to="/register">s'enregistrer</router-link> ou</td>
                    <td><button class="btn btn-danger btn-block">Se connecter</button></td>
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
    .bodyWeb{
        width: 50%;
        margin: auto;
        margin-top: 20px;
    }
</style>