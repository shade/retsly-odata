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
  activeListing: {}
}

const mutations = {

}


export default {
  state,
  actions,
  getters,
  mutations
}
