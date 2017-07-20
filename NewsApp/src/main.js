import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);


export const newsBus =  new Vue();

new Vue({
  el: '#app',
  components:{
    App
  }
});


