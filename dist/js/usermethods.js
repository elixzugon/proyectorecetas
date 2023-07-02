const app = Vue.createApp({
    data() {
        return {
          
            name: "",
            last_name: "",
            country: "",
            profiles_id: "",
            email: "",
            password: "",
            remember_token: "",

            register_url: ""


        }
    },

    mounted: function () {
        this.all_recipes = this.recipes;

        

//Llena el arreglo de recipes


},
methods: {


            onClickRegister(name,user_lastname,country,gmail,contra123){

                this.register_url= "?name="+name+"&lastname="+user_lastname+"&country="+country+"&email="+gmail+"&password="+contra123


                axios({
                    method: 'post',
                    url: 'https://prueba01.test/api/users/register/'+this.register_url
                })
                    .then(
                        (response) => {

                            let items = response.data;
                            console.log(response.data);
                            console.log(items);
    
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            }



    }
})

//USER_REGISTER_METHODS





//init custom events for components
const emitter = new mitt();

//global property for custom events
app.config.globalProperties.$test = emitter;