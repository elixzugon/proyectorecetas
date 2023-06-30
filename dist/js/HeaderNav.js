app.component('header-nav',{

    template:
    /*html*/ 
    `
    <header class="header">
       <a href="#" class="logo">
        <img src="images/Logo-cook-it.png" alt="Logo-cook-it">
       </a>
    <nav class="navbar navbar-expand-lg text-center ">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
            
                <a href="C:/laragon/www/proyectorecetas/dist/index.html">inicio</a>
                <a href="C:/laragon/www/proyectorecetas/dist/profile.html">guardados</a>
                <a href="C:/laragon/www/proyectorecetas/dist/top10.html">más votadas</a>
                <a href="C:/laragon/www/proyectorecetas/dist/profile.html">perfil</a>
            </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" v-model="searchQuery" type="search" placeholder="Search" aria-label="Search">
        <button  class="btn btn-search" type="submit">Search</button>

      </form>
        </div>
    </nav>
</header>
     `
})
