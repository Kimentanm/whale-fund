import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ErrorTipModal from '@/views/shared/errorTipModal';
import VueWorker from 'vue-worker'

Vue.use(ErrorTipModal);
Vue.use(ViewUI);
Vue.use(VueWorker)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
