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
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <img class="d-block m-auto img-fluid" v-bind:src="image" alt="{{ name }}">
        <h2 class="ingredients-title text-center pt-2 pb-3">INGREDIENTES</h1>      
        <ol class="ms-3 mb-3 mt-3">
        <li > LECHUGA</li>
        <li> TOMATE</li>
        <li> CEBOLLA MORADA</li>
        <li> ALMEENDRAS Y NUECES</li>
        <li> ACEITE DE OLIVO</li>
        
        </ol>
       <!-- <p class="text-center fs-6">{{ ingredients }}</p>-->
          <h2 class="ingredients-title">PREPARACIÓN</h2>
            <div class="pt-2 ps-2 pe-2 ">  
            <p class="fst-italic fw-light fs-5 ">{{ instructions }}</p>
            </div>
            <div class="row pt-2 ps-2 pe-2">
            <div class="col">
              <p class="times-title ps-2 pe-2">Tiempo de preparación: </p> 
            </div>
            <div class="col ">
              <p class="times-title ps-2 pe-2">Tiempo de cocción:</p> 
            </div>
            <div class="col ">
              <p class="times-title ps-2 pe-2">Tiempo total:</p> 
        </div>
            </div>
            <div class="row">
            <div class="col">
              <p class="times-descriptions">30 min</p> 
            </div>
            <div class="col">
              <p class="times-descriptions">0 min</p> 
            </div>
            <div class="col">
              <p class="times-descriptions">30 min</p> 
        </div>
            </div>
            <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="onClickPrev()">Prev</button>
          <button type="button" class="btn btn-secondary" v-on:click="onClickNext()">Next</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
  `
})