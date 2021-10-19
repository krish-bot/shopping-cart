<template>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{product.item}}</h5>
                    <p class="card-text">Price: {{product.price}}rs</p>
                    <p class="card-text">{{product.description}}</p>
                    <div class="flex">
                        <p>In Cart:{{product.quantity}}</p>
                        <a href="#" class="btn btn-secondary">Buy</a>
                        <a href="#" class="btn btn-secondary" @click="removeCart">Remove</a>
                    </div>
                </div>

            </div>
</template>

<script>
export default {
    name: 'CartItems',
    props: ['product']
}
</script>

<style scoped>
</style>