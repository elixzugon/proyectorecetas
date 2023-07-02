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
            console.log(this.name, this.last_name, this.username, this.country, this.email,  this.password);
            this.$emit('click', this.name, this.last_name, this.username, this.country, this.email, this.password);
        }
    },

    template:
    /*html*/ 
    `
      <!--<button type="submit" v-on:register="onClickRegister" class="log-reg-button">Registrar</button>-->
      <a class="log-reg-button" v-on:click="ClickRegister" >Registrar</a>

    `
})  