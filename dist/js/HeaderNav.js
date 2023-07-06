app.component('header-nav',{

    methods:{
        onClickSearchRecipe(){
            let recipe = document.querySelector("#recipe").value;
            console.log("searching recipe ->" + recipe);
            this.$emit('searchrecipe', recipe);
        }
    },

    template:
    /*html*/ 
    `
    <header class="header">
       <a href="file:///C:/laragon/www/proyectorecetas/dist/index.html" class="logo">
        <img src="images/Logo-cook-it.png" alt="Logo-cook-it">
       </a>
    <nav class="navbar navbar-expand-lg text-center ">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
            
                <a href="file:///C:/laragon/www/proyectorecetas/dist/index.html">inicio</a>
                <a href="file:///C:/laragon/www/proyectorecetas/dist/top10.html">más votadas</a>
                <a href="file:///C:/laragon/www/proyectorecetas/dist/profile.html">perfil</a>
            </ul>
        <form class="d-flex" role="search">
        <input id="recipe" class="form-control me-2" type="text" placeholder="Buscar" aria-label="Search">
        <button v-on:click="onClickSearchRecipe()" class="btn btn-search" type="button">Buscar</button>

      </form>
        </div>
    </nav>
</header>
     `
})
