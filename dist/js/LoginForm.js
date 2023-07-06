app.component('login-form', {
    methods: {
        //Este método se quedó aqui porque estaba probando que el login no funciona a pesar de que me tira mensaje
        //de que si logró hacer el login entonces hice la comprobación con este método pero no sirve,
        //logré enviar el id al component.js (componente padre) pero necesita estar logueado algun usuario
        //para poder cargar las recetas guardadas y para poder guardarlas.
        onGetUserID() {
            axios({
                method: 'get',
                url: 'http://prueba01.test/api/users/getuserid'
            })
                .then(
                    (response) => {
                        this.actualUserID = response.data.uid;
                        console.log(response);


                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
      onClickLogin() {
        const user = document.getElementById('email').value;
        const password = document.getElementById('password').value;

/*
        const data = {
            email: user,
            password: password
        };
*/

        let config = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        }
        //console.log(data);
        axios.post('http://prueba01.test/api/users/login',{
        email: user,
        password: password},config
        )

        .then(response => {
            //console.log(data);

                localStorage.setItem('userId', response.data.user.id);
                localStorage.setItem('token', response.data.user.accessToken);
                localStorage.setItem('id', response.data.user.id);
                localStorage.setItem('name', response.data.user.name);
                localStorage.setItem('lastname', response.data.user.lastname);
                localStorage.setItem('email', response.data.user.email);
                localStorage.setItem('country', response.data.user.country);
                this.onGetUserID();
                console.log(response.data.user.id);
                console.log(response.data);

                //window.location.href = 'file:///C:/laragon/www/proyectorecetas/dist/index.html';

        })
        .catch(error => {
          console.log(error);
          alert("Usuario no encontrado.")
        });
      }
    },
    template:
      /*html*/
      ` <!--form-->
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
                  <img src="images/slider1.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="images/slider2.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="images/slider3.png" class="d-block w-100" alt="...">
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
              <h1 class="fw-bold mb-4 ">Ingresar</h1>

              <form class="custom-form mb-5">
                  <div class="mb-4">
                  <label for="exampleInputEmail1" class="form-label fw-bold">Email</label>
                  <input type="email"  placeholder="Ingresa tu email" id="email" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-4">
                  <label for="exampleInputPassword1" class="form-label fw-bold">Contraseña</label>
                  <input type="password"  placeholder="Ingresa tu contraseña" id="password">
                  </div>

                  <a href="#" id="emailHelp" class="text-muted text-decoration-none mb-2 form-text"> ¿Has olvidado tu contraseña?</a>


                  <a @click="onClickLogin" type="submit" class="log-reg-button">Iniciar sesión</a>
              </form>

          </div>
          <div class="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 w-100 mt-auto">
              <p class=" d-inline-block mb-0">¿Todavía no tienes una cuenta?</p> <br> <a class="text-decoration-none create-account" href="file:///C:/laragon/www/proyectorecetas/dist/register.html"> Crea una ahora</a>
          </div>
      </div>

  </div>`
  });