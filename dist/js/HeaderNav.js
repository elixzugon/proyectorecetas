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
<!--
    <div class="icons">
        <div class="fas fa-search " id="search-btn"></div>
       <div class="fas fa-shopping-cart" id="cart-btn"></div>
        <div class="fas fa-bars " id="menu-btn"></div>  
    </div>
-->
    <div class="search-form">
        <input type="search" id="search-box" placeholder="search here...">
        <label for="search-box" class=" fas fa-search"></label>
    </div>

<!-- POSIBLE IMPLEMENTACIÓN FUTURA BASAD EN PROYECTO ANTERIOR
    <div class="cart-items-container">
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/cart-item-1.png" alt="">
            <div class="content">
                <h3>cart item 01</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/cart-item-2.png" alt="">
            <div class="content">
                <h3>cart item 02</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/cart-item-3.png" alt="">
            <div class="content">
                <h3>cart item 03</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/cart-item-4.png" alt="">
            <div class="content">
                <h3>cart item 04</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <a href="#" class="btn">checkout now</a>
    </div>
-->
</header>
     `
})
