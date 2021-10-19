<template>
    <div>
        <Nav class="fixed-top"/>
        <div class="p-md-5 mt-md-5`">
            <h3 class="text-center">On Sale</h3><hr style="height:2px;width:30%;color:gray;background-color:gray">
            <div class="row py-md-3 px-md-5">
                <Products 
                v-for = "product in items" 
                :key = "product.id"
                v-bind:product = "product" />
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Navbar'
import Products from '@/components/Products'
import items from '../data/items.js'

export default {
    components:{
            Nav,
            Products
    }, 
    data(){
        return{
            items: items
        }
    }
}
</script>

<style scoped>

</style>
