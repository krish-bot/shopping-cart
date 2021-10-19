<template>
    <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-dark px-md-5 ">
                <a class="navbar-brand pl-md-5" href="#">BookNow</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ">
                        <li class="nav-item pr-2">
                                <router-link class="nav-link ho-wh" to="/">Home</router-link>
                        </li>
                        <li class="nav-item pr-2">
                                <router-link class="nav-link ho-wh" to="/cart">Cart</router-link>
                        </li>
                        <li class="nav-item pr-2">
                                <router-link class="nav-link ho-wh" to="/profile">Profile</router-link>
                        </li>
                    </ul>
                    <div class="dropdown open ml-auto pr-md-5" >
                            <MiniCart />
                    </div>
                </div>
        </nav>
    </div>
</template>

<script>
import MiniCart from '../miniCart'
export default {
    name: 'Nav',
    components:{
        MiniCart
    },
    computed:{
        total(){
            return this.$store.getters.totalProduct
        }
    }
}
</script>

<style scoped>
    .ho-wh:hover{
        background-color: white !important;
        color: black !important;
    }

    .ho-wh{
        font-weight: 600 !important;
    }
</style>