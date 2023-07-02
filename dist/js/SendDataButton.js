app.component('send-data-button',{
    props:{
        name:{
            type: String,
            default: "default category"
        },
        last_name:{
            type: String,
            default: "default category"
        },
        country:{
            type: String,
            default: "default category"
        },
        email:{
            type: String, 
            default: "default category"
        },
        password:{
            type: String, 
            default: "default category"
        },

        
    },

    methods:{
        onClickRegister(){
            console.log("name"+this.name, "lastname"+this.last_name, "country"+this.country, "email"+this.email, "password"+ this.password,);
            this.$emit('click', this.name, this.last_name, this.country, this.email, this.password);
        }
    },

    template:
    /*html*/ 
    `
      <!--<button type="submit" v-on:register="onClickRegister" class="log-reg-button">Registrar</button>-->
      <a class="log-reg-button" v-on:click="onClickRegister" >Registrar</a>

    `
})  