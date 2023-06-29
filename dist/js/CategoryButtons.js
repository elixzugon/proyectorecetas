app.component('category-button',{
    props:{
        name:{
            type: String
        },
        id:{
            type: String
        }
    },

    methods:{
        onClickCategoryButton(){
            console.log(this.id);
            this.$emit('selectedcategory', this.id);
        }
    },

    template:
    /*html*/ 
    `

      <button class="button" v-on:click="onClickCategoryButton" >{{ name }}</button>

    `
})  