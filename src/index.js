const request = require('superagent')
const config = require('./config')
const Filter = require('./lib/filter')

class RetslyOData {

  constructor (token, vendor) {
    if (!vendor) {
      this.vendor = config.TEST_DATASET
    } else {
      this.vendor = vendor
    }

    if (!token) {
      throw new Error('Please provide a token. Otherwise, use the test token via Retsly.TEST_TOKEN')
    }

    this.endpoint = null
    this.response = null
    this.token = token
    this.query = {}
  }

  url () {
    const {vendor, endpoint, query} = this

    let url = `${config.BASE_URL}/${vendor}/${endpoint}?`

    for (var param in query) {
      base += `${param}=${query[param]}&`
    }

    return url
  }

  exec (cb) {
    const {vendor, endpoint, query, token} = this

    request
      .get(`${config.BASE_URL}/${vendor}/${endpoint}`)
      .set({'Authorization': `Bearer ${token}`})
      .query(query)
      .end((err, res) => {
        // Update the response, if there are no errors
        this.response = err
          ? null
          : res.body

        cb(err, res)
      })
  }
  Property (key) {
    // Response reset, otherwise count(), next(), and prev() will still work.
    this.response = null
    this.endpoint = `Property${key?`(${key})`:''}`
    return this
  }
  Member (key) {
    // Response reset, otherwise count(), next(), and prev() will still work.
    this.response = null
    this.endpoint = `Member${key?`(${key})`:''}`
    return this
  }
  Office (key) {
    // Response reset, otherwise count(), next(), and prev() will still work.
    this.response = null
    this.endpoint = `Office${key?`(${key})`:''}`
    return this
  }
  OpenHouse (key) {
    // Response reset, otherwise count(), next(), and prev() will still work.
    this.response = null
    this.endpoint = `OpenHouse${key?`(${key})`:''}`
    return this
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

  /** namespaced for private access */
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
}

// Constants
RetslyOData.TEST_TOKEN = config.TEST_TOKEN

module.exports = RetslyOData
