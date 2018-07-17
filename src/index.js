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

  constructor (token, vendor) {
    if (!vendor) {
      vendor = 'test'
    }

    if (!token) {
      throw new Error('Please provide a token. Otherwise, use the test token via Retsly.TEST_TOKEN')
    }
  }

  Property (key) {
    this.endpoint = `Property${key?`(${key})`:''}`
  }
  Member (key) {
    this.endpoint = `Member${key?`(${key})`:''}`
  }
  Office (key) {
    this.endpoint = `Office${key?`(${key})`:''}`
  }
  OpenHouse (key) {
    this.endpoint = `OpenHouse${key?`(${key})`:''}`
  }
}

// Constants
RetslyOData.TEST_TOKEN = config.TEST_TOKEN

module.exports = RetslyOData
