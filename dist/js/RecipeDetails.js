app.component('recipe-details', {
  props: {
    name: {
      type: String
    },
    image: {
      type: String
    },
    ingredients: {
      type: String
    },
    preparation_instructions: {
      type: String
    },
    description: {
      type: String
    },
    level: {
      type: String
    },
    portions: {
      type: Number
    },
    total_time: {
      type: Number
    },
    occasion: {
      type: String
    },

  },

  mounted(){
    this.$test.on('foo', function(data){
      console.log(data);
    });

  },
methods:{
  onClickPrev(){
      console.log("PREV");
      this.$emit('prevrecipe', this.index);

      
  },
  onClickNext(){
      console.log("NEXT")
      this.$emit('nextrecipe', this.index);

  }

},

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
        <div class="row modal-img-row">
        
          <div class="col-sm-6">
              <img class="modal-image" v-bind:src="image" alt="{{ name }}">
          </div>  

          <div class="col mt-4 ms-3 me-3 pe-3 ps-3 pb-4 summary-content">
              <h1 class="modal-recipe-name">{{ name }}</h1>
              <p class="modal-recipe-summary"> {{ description }}</p>

              <div class="row modal-details-row">

                <div class="col">
                  <h3>DIFICULTAD</h3>
                  <p>{{ level }}</p>
                </div>
                              
                <div class="col">
                  <h3>PORCIONES</h3>
                  <p>{{ portions }}</p>
                </div>
                                                          
                <div class="col">
                  <h3>TIEMPO</h3>
                  <p>{{ total_time }}</p>
                </div>
                
              </div>

          </div>  

        </div>
        <div class="row pe-5 ps-5 pt-4">
        <div class="col">
        <h1 class="modal-titles">INGREDIENTES</h1>      
        <div class="mb-3 mt-3 ingredients">
        <p> {{ ingredients }}</p>
        </div>
        </div>
        
        <div class="col">
        <h1 class="modal-titles">PREPARACIÓN</h1>      

        <p class="ingredients">{{ preparation_instructions }}</p>
        </div>
        </div>


        <div class="modal-footer">
          
      <a href="#" v-on:click="onClickLike()">
          <img  class="like-btn" src="./svg/star-solid-black.svg" alt="like">
      </a>
      <a href="#" v-on:click="onClickLike()">
          <img  class="view-recipe-btn" src="./svg/black-save.svg" alt="like">
      </a>
      
          <button type="button" class="btn-switch" v-on:click="onClickPrev()">Prev</button>
          <button type="button" class="btn-switch" v-on:click="onClickNext()">Next</button>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>

        </div>
      </div>
    </div>
  </div>
  `
})