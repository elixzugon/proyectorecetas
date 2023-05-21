app.component('recipe-details',{
    props:{
        name:{
            type:String
        },
        image:{
            type:String
        },
        ingredients:{
            type:String
        },
        instructions:{
            type:String
        },
    },
    //HIDEN MOUNTED
    /*
    mounted(){
      this.$test.on('foo', function(data){
        console.log(data);
      });

    },
methods:{
    onClickPrev(){
        console.log("PREV");

    },
    onClickNext(){
        console.log("NEXT");
    }

},*/

    template:
    /*html*/ 
    `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-width">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <img class="d-block m-auto img-fluid" v-bind:src="image" alt="{{ name }}">
        <div class="row">
        <div class="col-sm-4">
        <h2 class="modal-titles">INGREDIENTES</h1>      
        <div class="ms-3 mb-3 mt-3 ingredients">
        <p > LECHUGA</p>
        <p> TOMATE</li>
        <p> CEBOLLA MORADA</p>
        <p> ALMEENDRAS Y NUECES</p>
        <p> ACEITE DE OLIVO</p>
        </div>
        </div>
        <div class="col-sm-4">
        <h2 class="modal-titles">PREPARACIÓN</h1>      

        <p class="ingredients">{{ instructions }}</p>
        </div>

        <div class="col-sm-4">
        <h2 class="modal-titles">PORCIONES</h1>      

        <p class="ingredients">14</p>
        </div>

        </div>

          <div class="modal-footer">
          <button type="button" class="btn-like-modal" v-on:click="onClickPrev()">Like</button>
          <button type="button" class="btn-switch" v-on:click="onClickPrev()">Prev</button>
          <button type="button" class="btn-switch" v-on:click="onClickNext()">Next</button>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>

        </div>
      </div>
    </div>
  </div>
  `
})