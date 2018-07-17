/* jshint esversion: 6 */

const request = require('superagent')
const config = require('./config')
const Filter = require('./filter')

const RETS_URL = 'http://rets.io'
const DEFAULT_OPTIONS = [ 'urlBase' ]
const VALID_ENDPOINTS = [ 'Property', 'Properties', 'Member', 'Office', 'Openhouse', 'Media' ]
const TEST_DATASET = 'test'
const TEST_TOKEN = '6baca547742c6f96a6ff71b138424f21'

class RetslyOData {
  /**
   * Initializes a Retsly OData JS SDK
   * @param {String} token - The provided Auth token
   * @param {Object} opts - An object of options
   */
  constructor (token, dataset, endpoint, opts) {
    // Set default options.
    this._dataset = TEST_DATASET
    this.urlBase = '/api/v2/OData'
    // Make sure the token is specified
    if (!token) {
      const msg = 'You must provide a browser token e.g. `new Retsly(token, endpoint)`'
      throw new Error(msg)
    }

    // Make sure an endpoint is set, and valid.
    if (!endpoint) {
      const msg = 'You must provide an endpoint e.g. `new Retsly(token, endpoint)`'
      throw new Error(msg)
    }
    if (!VALID_ENDPOINTS.includes(endpoint)) {
      let msg = `${endpoint} is not a valid endpoint. Choose one of: ${JSON.stringify(VALID_ENDPOINTS)}`

      throw new Error(msg)
    }

    // Make sure all the options are previously specified
    for (var opt in opts) {
      if (!DEFAULT_OPTIONS.hasOwnProperty(opts)) {
        const msg = `[${opt}] is not a valid option.`
        throw new Error(msg)
      }
    }

    Object.assign(this, opts)
    this._token = token
    this.query = {}
  }
}

// Constants
RetslyOData.TEST_TOKEN = config.TEST_TOKEN

module.exports = RetslyOData
