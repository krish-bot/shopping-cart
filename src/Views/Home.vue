<template>
    <div class="d-flex flex-column justify-content-center align-center">
        <Nav class="fixed-top"/>
        <Banner />
        <Footer />
    </div>
</template>

<script>
import Nav from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

export default {
    components:{
        Nav,
        Banner,
        Footer
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
