import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'


Vue.use(ElementUI)


Vue.filter('reverse', function (array) {
  return array.slice().reverse()
});

new Vue({
  el: '#app',
  render: h => h(App)
})
