import Vue from 'vue';
import App from './App';
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDMxcL02RP6_JAqonHyFJ8IG_AHxikhJbo',
    libraries: 'places'
  },
  installComponents: true,
});

Vue.use(VueResource);

Vue.component('google-map', VueGoogleMaps.Map);
Vue.component('google-marker', VueGoogleMaps.InfoWindow);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
