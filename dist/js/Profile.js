app.component('profile',{

    data(){
        return{
            counter: 0,
            name:'',
            lastname:'',
            country:'',
            email:'',
        }
    },

    userData(){
      this.name=localStorage.getItem('name');
      this.lastname=localStorage.getItem('lastname');
      this.country=localStorage.getItem('country');
      this.email=localStorage.getItem('email');
    },
    methods:{
      onClickLogout(){
        token = localStorage.getItem('token');
        console.log(this.name);
        console.log(localStorage.getItem('token'));
        console.log(token);

        let config = {
          headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
          }
      }

        axios({
          method: 'get',
          url: '/api/users/logout',headers: { Authorization: 'Bearer ${token}'},config
        })
        .then(
          (response) => {
            
            //window.location.href = 'http://localhost/proyectorecetas/dist/login.html'
          }
        )
        .catch (
          error => console.log(error)
        );
      }
    },
    template:
    /*html*/ 
    `
    
<section class="text-center h-100 gradient-custom-2">
<div class="py-5 h-100">
  <div class="justify-content-center align-items-center h-100">
    <div class="ps-5 text-white d-flex flex-row" style="background-color: rgb(213 70 48);
        height: 200px;">
        
        
          <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
          
          <div class="btn-group dropend">
          <button type="button" class="btn-search dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Opciones
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="C:/laragon/www/proyectorecetas/dist/passwordrecovery.html">Cambio de contraseña</a></li>
            <li><a @click="onClickLogout" class="dropdown-item" >Cerrar sesión</a></li>
          </ul>
        </div>
          
            <img alt="Imagen" class="img-fluid img-thumbnail mt-4 mb-2"
            style="width: 150px; z-index: 1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
              

          </div>
          <div class="ms-3" style="margin-top: 130px;">
            <h5>{{name}}</h5>
            <p>{{lastname}}</p>
          </div>
          
        </div>
        <div class="p-4 " style="background-color: #f8f9fa;">
          <div class="d-flex justify-content-end text-center py-1">
            <div>
              <p class="mb-1  profile-data">{{country}}</p>
              <p class="mb-0 profile-data-title">Publicaciones</p>
            </div>
            <div class="px-3">
              <p class="mb-1  profile-data">{{email}}</p>
              <p class="mb-0 profile-data-title">Likes</p>
            </div>
            

          </div>
        </div>
        <div class="card-body p-4 text-black">
          <div class="mb-5">
            <p class="profile-data-title mb-1">Biografia</p>
            <div class="p-4" style="background-color: #f8f9fa;">
              <p class="font-italic mb-1">{{}}</p>
            </div>
          </div>
          <div class="justify-content-between align-items-center mb-4">
            <p class="profile-data-title mb-0 text-center">Recetas guardadas</p>
          </div>
          <div class="container ps-5 pe-5 row text-center">

          </div>
       
    </div>
  </div>
</div>
</section>

     `
})


