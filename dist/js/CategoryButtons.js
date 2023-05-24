app.component('category-button',{
    props:{
        name:{
            type: String
        }
    },

    methods:{
        onClickCategoryButton(){
            console.log(this.name);
            this.$emit('selectedcategory', this.name);
        }
    },

    template:
    /*html*/ 
    `

      <button class="button" v-on:click="onClickCategoryButton" >{{ name }}</button>

    `
})  