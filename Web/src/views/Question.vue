<template>
    <Header />
    <div class="bodyWeb">
        <h1>Question</h1>
        test
    </div>

    <Footer />
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