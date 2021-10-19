<template>
    <div >
        <button class="btn btn-light nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-shopping-cart "></i>{{total}}
        </button>
            <div class="dropdown-menu" 
                style="min-width:320px; right:0; left:auto;"
                aria-labelledby="navbarDropdown" @click="$event.stopPropagation()">
            <div v-for="items in cart" :key="items.product.id">
                <div class="px-2 d-flex justify-content-between">
                    <div>
                        <strong>
                            {{ items.product.item }}
                    </strong><br/> {{items.quantity}} x {{items.product.price}} rs  
                    </div>
                    <div>
                            <a href="#" class="btn btn-secondary" @click.prevent="removeCart(items.product)">remove</a>                        </div>
                    </div>
                </div>
                <hr />
                <div class="px-2 d-flex justify-content-between">
                    <span>total: {{ totPrice }}</span>
                <a href="" @click.prevent="clearCart()" >clear cart</a>
            </div>
            <input type="checkbox">
        <label>click me</label>
        </div>
        
    </div>
</template>

<script>

export default {
    name: "MiniCart",
    computed:{
        cart(){
            return this.$store.state.cart
        },
        total(){
            return this.$store.getters.totalProduct
        },
        totPrice(){
            return this.$store.getters.totalPrice
        }
    },
    mounted(){
        this.$store.commit('getCartItem')
    },
    methods:{
        removeCart(product){
            this.$store.dispatch('removeProductFromCart', product)
        },
        clearCart(){
            this.$store.dispatch('clearCartItem')
        }
    }
}
</script>

<style scoped>

   
</style>