const app = Vue.createApp({

})


//init custom events for components
const emitter = new mitt();

//global property for custom events
app.config.globalProperties.$test = emitter;

