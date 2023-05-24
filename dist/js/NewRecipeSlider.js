app.component('new-recipe-slider',{
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
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators pt-5">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
    <div class="carousel-item active ">
        <new-recipe-card image="./images/blog-1.jpeg" category="Lunch" name="Sushi" description="300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber" time="30 mins" level="Easy" likes=2></new-recipe-card>
    </div>
    <div class="carousel-item">
        <new-recipe-card image="./images/blog-1.jpeg" category="Lunch" name="Sushi" description="300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber" time="30 mins" level="Easy" likes=2></new-recipe-card>
    </div>
    <div class="carousel-item">
        <new-recipe-card image="./images/blog-1.jpeg" category="Lunch" name="Sushi" description="300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber" time="30 mins" level="Easy" likes=2></new-recipe-card>
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
