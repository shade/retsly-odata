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

    this.endpoint = null
    this.response = null
  }

  Property (key) {
    // Response reset, otherwise count(), next(), and prev() will still work.
    this.response = null
    this.endpoint = `Property${key?`(${key})`:''}`
  }
  Member (key) {
    // Response reset, otherwise count(), next(), and prev() will still work.
    this.response = null
    this.endpoint = `Member${key?`(${key})`:''}`
  }
  Office (key) {
    // Response reset, otherwise count(), next(), and prev() will still work.
    this.response = null
    this.endpoint = `Office${key?`(${key})`:''}`
  }
  OpenHouse (key) {
    // Response reset, otherwise count(), next(), and prev() will still work.
    this.response = null
    this.endpoint = `OpenHouse${key?`(${key})`:''}`
  }

  _verifyResponse (command) {
    if (!this.response || this.response.status !== 200) {
      throw new Error(`Please execute a valid query before using ${command}`)
    }
  }
  _bundleLength () {
    if (this.response.value && this.response.value.length) {
      return this.response.value.length
    }

    return config.DEFAULT_BUNDLE_LENGTH
  }

  count () {
    this._verifyResponse('count()')
    let value = this.response.value

    if (value.length) {
      return value.length
    } else {
      return 0
    }
  }

  next (cb) {
    this._verifyResponse('next()')
    // If we have hit the end.
    if (this.$skip >= this.count()) {
      return []
    }
    this.$skip(this._bundleLength(), true)
    return this.exec(cb)
  }

  prev (cb) {
    this._verifyResponse('prev()')
    // If we have hit the beginning.
    if (this.$skip <= 0) {
      return []
    }
    this.$skip(-this._bundleLength(), true)
    return this.exec(cb)
  }
}

// Constants
RetslyOData.TEST_TOKEN = config.TEST_TOKEN

module.exports = RetslyOData
