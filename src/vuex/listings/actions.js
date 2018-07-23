
import Vue from 'vue';
import SDK from 'bridge-sdk';

/**
 * Queries to fill an autocomplete
 * @param {Vuex}
 * @param {string} partialAddress - the partial address trying to be found.
 */
export function queryAutoComplete ({ commit }, partialAddress) {}

/**
 * Grabs all the comps for a given listings
 * @param {Vuex}
 * @param {string} listingKey - the listing key to grab all comparables to and the listing
 */
export function queryAllListingAndComps ({ commit }, listingKey) {}

/**
 * Grabs both the pub and zestimate data from the API
 * @param {Vuex}
 * @param {string} listingKey - the listing key to grab info for.
 */
export function queryPubDataAndZestimate ({ commit }, listingKey) {}
