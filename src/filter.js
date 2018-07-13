/* jshint esversion: 6 */

class FilterNode {
  constructor (obj) {
    const keys = Object.keys(obj)
    // If this is a lambda, must have a variable
    _checkVerifyLambda(obj, keys)
    // Make sure proper params are set
    _checkVerifyExpression(obj, keys)

    const { subject, comparator, object, variable, expression } = obj

    // Set the subject values recursively.
    if (typeof obj.subject === 'object') {
      this.subject = new FilterNode(obj.subject).toString()
    } else {
      this.subject = obj.subject
    }

    // Set the object values recursively.
    if (typeof obj.object === 'object') {
      this.object = new FilterNode(obj.subject).toString()
    } else {
      this.object = obj.object
    }

    this.comparator = obj.comparator
  }

  _checkVerifyLambda (obj, keys) {
    if (obj.comparator === 'any' || obj.comparator === 'all') {
      if (!obj.variable) {
        throw new Error('Lambda expressions (any, all), must specify a variable')
      }
    }
  }

  _checkVerifyExpression (obj, keys) {
    const { subject, comparator, object, variable, expression } = obj

    if (expression && (subject || comparator || object || variable)) {
      throw new Error('expression overrides (subject, comparator, object, and variable) please clean your $filter param')
    }

    if (!expression) {
      if (!(subject || comparator || object)) {
        throw new Error('(subject, comparator, and object) must be specified, otherwise use `expression`')
      }
    }
  }

  toString () {
    const {expression, subject, comparator, object} = this
    return `${subject} ${comparator} ${object}`
  }
}

module.exports = FilterNode
