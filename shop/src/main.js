import Vue from 'vue'
import App from './App.vue'
require("!style-loader!css-loader!./static/css/style.css");
new Vue({
  el: '#app',
  render: h => h(App)
})
