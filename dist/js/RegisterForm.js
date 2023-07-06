app.component('register-form',{

    methods: {

        
                    onClickRegister(){
                        
                        const name = document.getElementById('name').value;
                        const last_name = document.getElementById('last_name').value;
                        const country = document.getElementById('country').value;
                        const email = document.getElementById('email').value;
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
        
                        const data = {
                            name: name,
                            last_name: last_name,
                            country: country,
                            email: email,
                            username: username,
                            password: password
                        };
                    
                    axios.post('http://prueba01.test/api/users/register', data)
                    .then(response => {
                        console.log(response.data);
                        window.location.href = './login.html';
                    })
                    .catch(error => {
                        console.error(error);
                    });

                    console.log(data);
            }
        
        
    },
            
        
    template:
    /*html*/ 
    `

    <div class="row g-0">
        <div class="col-lg-7 d-none d-lg-block">
            

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/slider1.png" class="d-block" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="images/slider2.png" class="d-block" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="images/slider3.png" class="d-block" alt="...">
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


        </div>
        <div class="col-lg-5 d-flex flex-column align-items-end min-vh-100">
            <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 w-100 mb-auto">
                <img src="images/Logo-cook-it-orange.png" class="img-fluid" alt="logo">
            </div>
            <div class="px-lg-5 py-lg-4 p-4 w-100 align-self-center">
                <h1 class="fw-bold mb-4 ">Crear tu Cuenta</h1>

                <form class="custom-form mb-5">
                    <div class="mb-4">
                    <label for="exampleInputNombre1" >Nombre</label>
                    <input type="name"  placeholder="Ingresa tu nombre" id="name" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-4">
                    <label for="exampleInputApellido1" >Apellido</label>
                    <input type="last_name"  placeholder="Ingresa tu apellido" id="last_name">
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputUsuario1" >Nombre de Usuario</label>
                        <input type="username"  placeholder="Ingresa tu nombre de Usuario" id="username">
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputEmail1" >Correo Electronico</label>
                        <input type="email"  placeholder="Ingresa tu Correo Electronico" id="email">
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputPassword" >Contraseña</label>
                        <input type="password"  placeholder="Ingresa tu contraseña" id="password">
                    </div>

                    <div class="mb-4">
                        <label for="exampleInputCountry1">Tu país</label>
                        <input type="country"  placeholder="Re ingresa tu contrasña" id="country">
                    </div>

            
                   <a  @click="onClickRegister" class="log-reg-button">Registrar</a>

                </form>
                <div class="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 w-100 mt-auto">
                <p class=" d-inline-block mb-0">¿Ya tienes una cuenta?</p> <br> <a class="text-decoration-none create-account" href="file:///C:/laragon/www/proyectorecetas/dist/login.html"> Inicia sesión</a>
            </div>
            </div>
            
        </div>

    </div>
     `
});
