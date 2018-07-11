/*jshint esversion: 6 */

const emitter = require('component-emitter');
const RETS_URL = 'http://rets.io';
const DEFAULT_OPTIONS = [ 'urlBase' ];

class RetslyOData {
  /**
   * Initializes a Retsly OData JS SDK
   * @param {String} token - The provided Auth token
   * @param {Object} opts - An object of options
   */
  constructor (token, opts) {
    // Set default options.
    this.dataset = 'test';
    this.urlBase = '/api/v2/OData';

    // Make sure the token is specified
    if (!token) {
      let errMsg = 'You must provide a browser token - ie: new RetslyOData(\'token\');';
      throw new Error(errMsg);
    }

    // Make sure all the options are previously specified
    for (var opt in opts) {
      if (!DEFAULT_OPTIONS.hasOwnProperty(opts)) {
        let errMsg = `[${opt}] is not a valid option.`;
        throw new Error(errMsg);
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
    const [field, order] = data.split(' ');


    this._updateQuery('$orderby', data);
    return this;
  }

  $expand (data) {
    this._updateQuery('$expand', data);
    return this;
  }


  setToken (token) {
    this.token = token;
    return;
  }

  getToken () {
    return this.token;
  }
}
