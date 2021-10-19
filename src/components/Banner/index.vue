<template>
    <div>
        <div class="banner ">
            <div class="container-fluid p-md-5 py-5 my-md-5">
                <h1 class="p-md-5 mt-3">You can Buy your Dream apple here.!</h1>
                <p class="px-md-5 mr-md-5 banner-description text-light">'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button class="btn btn-secondary ml-md-5">Know more</button>
            </div>
        </div>

        <div class="p-md-5">
            <h2 class="text-center">OUR PRODUCTS</h2><hr style="height:2px;width:30%;color:gray;background-color:gray">
            <div class="d-md-flex justify-content-center p-md-5 ">
                <div class="p-md-5">
                    <div class="banner-description pb-3">
                        <h3>Mac Book</h3><hr style="height:2px;width:50%;text-align:left;margin-left:0;color:gray;background-color:gray">
                        <p >It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>   
                    </div>
                    <div class="p-md-3 mar text-right">
                        <h3>iPad</h3><hr style="height:2px;width:30%;text-align:right;margin-right:0;color:gray;background-color:gray">
                        <p >It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div class="banner-description pb-md-3">
                        <h3>iPhone</h3><hr style="height:2px;width:30%;text-align:left;margin-left:0;color:gray;background-color:gray">
                        <p >It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <img src="../../assets/product.jpg" class="image d-none d-md-block"/>
            </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>
    .banner{
        background-image: url('../../assets/ourProducts.jpg');
        background-size: cover;
    }
    .image{
        padding: 0px !important;
        width: 40% !important;
    }
    .line{
        height: 5px;
        color: black
    }
    @media only screen and (min-width: 992px){
        .banner-description{
            width: 50%
        }
        .mar{
            margin-left: 19rem;
        }
    }
    
</style>