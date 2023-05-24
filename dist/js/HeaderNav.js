app.component('header-nav',{

    template:
    /*html*/ 
    `
    <header class="header">
       <a href="#" class="logo">
        <img src="images/Logo-cook-it.png" alt="Logo-cook-it">
       </a>
    <nav class="navbar navbar-expand-lg ">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
            
                <a href="#inicio">inicio</a>
                <a href="#acerca_de">acerca de</a>
                <a href="#blogs">blogs</a>
                <a href="#top_10">top 10</a>
                <a href="#guardados">guardados</a>
                <a href="#mas_votadas">más votadas</a>
                <a href="#perfil">perfil</a>
            </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-search" type="submit">Search</button>
      </form>
        </div>
    </nav>

    <div class="search-form">
        <input type="search" id="search-box" placeholder="search here...">
        <label for="search-box" class=" fas fa-search"></label>
    </div>

</header>
     `
})
