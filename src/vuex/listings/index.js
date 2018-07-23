import Vue from 'vue'

import * as getters from './getters.js'
import * as actions from './actions.js'
import {
  UPDATE_LISTINGS,
  UPDATE_QUERY,
  UPDATE_ACTIVE_QUERY,
  UPDATE_RADIUS,
  UPDATE_PRICE_RANGE
} from './mutation-types.js'

const state = {
  listingCache: {},
  queryCompleteCache: {},
  activeAutoComplete: [],
  activeListing: "",
  priceRange: 0,
  radius: 0
}

const mutations = {
  [UPDATE_LISTINGS] (state, data) {

  },
  [UPDATE_QUERY] (state, data) {

  },
  [UPDATE_ACTIVE_QUERY] (state, data) {

  },
  [UPDATE_RADIUS] (state, data) {

  },
  [UPDATE_PRICE_RANGE] (state, data) {

  }
}


export default {
  state,
  actions,
  getters,
  mutations
}
