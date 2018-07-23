import Vue from 'vue';
import Vuex from 'vuex';

import listings from './modules/listings'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    listings
  },
  strict: debug
});
