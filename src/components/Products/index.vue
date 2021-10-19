<template>
        <div class="col-md-4 p-5">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="product.img" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{product.item}}</h5>
                    <p class="card-text">Price: {{product.price}}rs</p>
                    <p class="card-text">{{product.description}}</p>
                    <div class="flex">
                        <button href="#" class="btn btn-secondary">Buy</button>
                        <button href="#" class="btn btn-secondary" @click="addToCart()">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Products',
    props: ['product'],
    methods: {
        addToCart(){
            this.$store.dispatch('addProductToCart',{
                product:this.product,
                quantity:1
            })
        }
    }
}
</script>

<style scoped>
</style>