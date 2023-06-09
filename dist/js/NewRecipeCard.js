app.component('new-recipe-card',{
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
        index:{
            type: Number
        }
    },
    
    methods:{
        onClickLike(){
            //console.log("LIKE");
            this.$emit('recipelike', this.index);
            //this.recipe_likes++;
        },
        onClickUnlike(){
            //console.log("UNLIKE");
            this.$emit('recipeunlike', this.index);
    
        },
        onClickViewRecipe(){
            console.log("VIEW");
            this.$emit('recipedetails', this.index);
            this.$emit('selectedrecipe', this.index); 
        },
     },

    template:
    /*html*/ 
    `
    
    <div class="box p-3">
    <img v-bind:src="image" v-on:click="onClickViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="img-recipe" alt="featured recipe">
    <div class=" p-0">
        <h5 class="pt-5 product-title">{{ name }}</h5>
    <div class="product-details row">

    <div class="col">
        <p>{{ likes }}</p>
    </div>

    <div class="col">
        <p>{{ total_time }}</p>
    </div>

</div>
</div>

        <div class="row">
            <div class="col">
            <a href="#" v-on:click="onClickLike()">
                <img  class="like-btn" src="./svg/star-solid.svg" alt="like">
            </a>
            </div>
            <div class="col">
            <a href="#" v-on:click="onClickViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img class="view-recipe-btn" src="./images/ojo-ver-receta.png" alt="view recipe">
            </a>
            </div>
        </div>
</div>

     `
})
