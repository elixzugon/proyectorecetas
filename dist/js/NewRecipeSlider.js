app.component('new-recipe-slider',{

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
    total_time:{
        type: Number,
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
            this.$emit('selectedrecipe', this.index); // Emitir evento 'selectedrecipe' con el índice de la receta seleccionada
              
            //this.$test.emit('foo',"works!");
        },
     },


    template:
    /*html*/ 
    `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators pt-5">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
    <div class="carousel-item active ">
    <div v-bind:src="item.id" v-for="(item, [[1]]) in recipes" class="col-sm-3 pt-1">
    <recipe-card :image="item.image" :category="item.category" :name="item.name" :description="item.description" :time="item.time" :level="item.level" :likes="item.likes" :index="item.id" v-on:recipelike="onClickRecipeLike" v-on:recipeunlike="onClickRecipeUnlike"
    v-on:recipedetails="onClickRecipeDetails"></recipe-card>
    </div>
    </div>
    <div class="carousel-item">
    <div v-bind:src="item.id" v-for="(item, [[2]]) in recipes" class="col-sm-3 pt-1">
    <recipe-card :image="item.image" :category="item.category" :name="item.name" :description="item.description" :time="item.time" :level="item.level" :likes="item.likes" :index="item.id" v-on:recipelike="onClickRecipeLike" v-on:recipeunlike="onClickRecipeUnlike"
    v-on:recipedetails="onClickRecipeDetails"></recipe-card>
    </div>
    </div>
    <div class="carousel-item">
    <div v-bind:src="item.id" v-for="(item, [[3]]) in recipes" class="col-sm-3 pt-1">
    <recipe-card :image="item.image" :category="item.category" :name="item.name" :description="item.description" :time="item.time" :level="item.level" :likes="item.likes" :index="item.id" v-on:recipelike="onClickRecipeLike" v-on:recipeunlike="onClickRecipeUnlike"
    v-on:recipedetails="onClickRecipeDetails"></recipe-card>
    </div>
    </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
</div>

     `
})
