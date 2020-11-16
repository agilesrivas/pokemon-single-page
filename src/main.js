import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './utils/router';
import store from './utils/store';

locale.use(lang)
Vue.use(BootstrapVue);
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
