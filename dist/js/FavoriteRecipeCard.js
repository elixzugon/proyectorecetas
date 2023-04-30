app.component('favorite-recipe-card',{
    props:{
        category:{
            type: String
        }
    },
    if(){
    template:
    /*html*/ 
    `<button class='btn btn-dark' >{{ category }}</button>`
}})