import Vue from 'vue';
import { install } from 'user-profile-layout';
import Settings from './Settings.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(install);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(Settings),
}).$mount('#app');
