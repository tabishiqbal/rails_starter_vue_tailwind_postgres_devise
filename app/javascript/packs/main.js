import '../css/main.css'

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

// Components
import App from '../components/app.vue'
Vue.component('app', App)

Vue.use(TurbolinksAdapter)

import axios from 'axios'

document.addEventListener('turbolinks:load', () => {
  axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  axios.defaults.headers.common['Accept'] = 'application/json'
  const app = new Vue({
    el: '#app'
  })
})
