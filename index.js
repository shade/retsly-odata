/*jshint esversion: 6 */

const emitter = require('component-emitter');
const RETS_URL = 'http://rets.io';
const DEFAULT_OPTIONS = [ 'urlBase' ];
const VALID_ENDPOINTS = [ 'Property', 'Properties', 'Member', 'Office', 'Openhouse', 'Media' ];
const TEST_DATASET = 'test';
const TEST_TOKEN = '6baca547742c6f96a6ff71b138424f21';

class RetslyOData {
  /**
   * Initializes a Retsly OData JS SDK
   * @param {String} token - The provided Auth token
   * @param {Object} opts - An object of options
   */
  constructor (token, endpoint, opts) {
    // Set default options.
    this.dataset = TEST_DATASET;
    this.urlBase = '/api/v2/OData';

    // Make sure the token is specified
    if (!token) {
      const msg = 'You must provide a browser token e.g. `new Retsly(token, endpoint)`';
      throw new Error(msg);
    }

    // Make sure an endpoint is set, and valid.
    if (!endpoint) {
      const msg = 'You must provide an endpoint e.g. `new Retsly(token, endpoint)`';
      throw new Error(msg);
    }
    if (!VALID_ENDPOINTS.includes(endpoint)) {
      let msg = `${endpoint} is not a valid endpoint. Choose one of: ${JSON.stringify(VALID_ENDPOINTS)}`;

      throw new Error(msg);
    }

    // Make sure all the options are previously specified
    for (var opt in opts) {
      if (!DEFAULT_OPTIONS.hasOwnProperty(opts)) {
        const msg = `[${opt}] is not a valid option.`;
        throw new Error(msg);
      }
    }

    Object.assign(this, opts);
    this.token = token;
  }

  token (token) {
    this.token = token;
    return this;
  }

  dataset (data) {
    this.dataset = data;
    return this;
  }

  $skip (data) {
    let num = parseInt(data);
    // Number validation.
    if (!isNaN(num)) {
      throw new SyntaxError(`$skip must be a number, ${data} is not a number.`);
    }
    this._updateQuery('$skip', num);
    return this;
  }

  $select (data) {
    this._updateQuery('$select', data);
    return this;
  }

  $top (data) {
    let num = parseInt(data);
    // Number validation.
    if (!isNaN(num)) {
      throw new SyntaxError(`$skip must be a number, ${data} is not a number.`);
    }
    this._updateQuery('$top', data);
    return this;
  }

  $orderby (data) {
    // Data MUST be in format 'FIELD ASC|DSC'.
    const [field, order, invalid] = data.split(' ');

    if (invalid || !['asc','dsc'].includes(order.toLowerCase())) {
      throw new SyntaxError('$orderby MUST be in format "FIELD (ASC|DSC)"');
    }

    this._updateQuery('$orderby', data);
    return this;
  }

  $expand (data) {
    this._updateQuery('$expand', data);
    return this;
  }

  $filter (data) {
    if (typeof data === 'string') {
      this._updateQuery('$filter', data);
    } else if (typeof data === 'object') {

    } else {
      throw new TypeError('$filter must either be a string or a specific object');
    }

    return this;
  }

  setToken (token) {
    this.token = token;
    return;
  }

  getToken () {
    return this.token;
  }

  static testToken () {
    return TEST_TOKEN;
  }
}
