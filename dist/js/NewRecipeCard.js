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
            //this.$test.emit('foo',"works!");
        },
     },
    template:
    /*html*/ 
    `
    
    <div class="box p-3">
    <img v-bind:src="image" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="img-recipe" alt="featured recipe">
    <div class=" p-0">
        <p class="pt-3 product-category">{{ category }}</p>
        <h5 class="product-title">{{ name }}</h5>
        <p class="product-description">{{ description }}</p>
<div class="product-details row">

    <div class="col">
        <p>{{ time }}</p>
    </div>

    <div class="col">
        <p>{{ likes }}</p>
    </div>
    
</div>
</div>
</div>

     `
})
