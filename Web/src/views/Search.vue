<template>
    <Header />
    <div class="bodyWeb">
        <h1>Search</h1>
        <div class="AreaSearch">
            <form>
                <table>
                    <tr>
                        <td><label for="search">recherche</label></td>
                        <td><input type="text" id="search"></td>
                        <td>
                            <select>
                                <option selected>--- Filtre ---</option>
                                <option>--- Nom ---</option>
                                <option>--- Image ---</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><input style="width: 100%" type="submit"></td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="AreaUser">
            <div v-for="user in users" :key="user.name" class="DisplayUser">
                <div class="AreaPicture">
                <img class="Picture" :src="user.image" :alt="user.name"  />
                </div>
                <br>
                {{user.name}}
            </div>
        </div>



    </div>

    <Footer />
</template>
<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import myJson from '../assets/data/users.json'

    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                users: myJson
            };
        },
    }
</script>

<style>
    .bodyWeb{
        width: 50%;
        margin: auto;
        margin-top: 20px;
    }
    .AreaSearch {
        margin: auto;
        width: 50%;
    }
    .Picture {
        width: 200px;
        height: auto;
    }
    .AreaUser {
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
    }
    .DisplayUser {
        margin: 20px;
        height: 300px;
    }
    .AreaPicture{
        height: 250px;
    }
</style>