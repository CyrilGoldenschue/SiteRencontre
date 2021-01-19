<template>
    <Header />
    <div class="test">
        <h1>Chat</h1>
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
    body {
        margin : 0;
    }

    .test {
        height: 100%;
    }
</style>