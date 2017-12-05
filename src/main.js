import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/stylus/index.styl'
import 'babel-polyfill'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazylord from 'vue-lazyload'


Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazylord, {
  loading: require('./components/m-header/logo@2x.png')
});

fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
