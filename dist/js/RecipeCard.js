app.component('recipe-card',{
    props:{
        image:{
            type: String
        },
        category:{
            type: String,
            default: "default category"
        },
        name:{
            type: String,
            default: "default name"
        },
        description:{
            type: String,
            default: "default description"
        },
        time:{
            type: String,
            default: "default time"
        },
        level:{
            type: String,
            default: "default level"
        },
        likes:{
            type: Number,
            default: 1
        },
    },
    data(){
        return{
            counter: 0
        }
    },
    template:
    /*html*/ 
    `
    
    <div class="box p-3 col-3">
    <img v-bind:src="image" class="img-recipe" alt="featured recipe">
    <div class=" p-0">
        <p class="pt-3 product-category">{{ category }}</p>
        <h5 class="product-title">{{ name }}</h5>
        <p class="product-description">{{ description }}</p>
<div class="product-details row">

    <div class="col">
        <p>{{ time }}</p>
    </div>

    <div class="col">
        <p>{{ level }}</p>
    </div>

    <div class="col">
        <p>{{ likes }}</p>
    </div>
    
</div>
        <a href="#">
            <img class="like-btn" src="./svg/star-solid.svg" alt="like">
        </a>
        <!--<button class="btn btn-success">Unlike</button>-->
        <a href="#">
            <img class="view-recipe-btn" src="./images/ojo-ver-receta.png" alt="view recipe">
        </a>    </div>
</div>

     `
})
