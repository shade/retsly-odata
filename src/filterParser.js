/*jshint esversion: 6 */

class FilterNode {
  constructor (obj) {
    if (!(obj.subject && obj.comparator && obj.object)) {
      throw new Error('FilterNode must have a subject, object and comparator.')
    }

    // Set the subject values recursively.
    if (typeof obj.subject === 'object') {
      this.subject = new FilterNode(obj.subject).toString();
    } else {
      this.subject = obj.subject;
    }

    // Set the object values recursively.
    if (typeof obj.object === 'object') {
      this.object = new FilterNode(obj.subject).toString();
    } else {
      this.object = obj.object;
    }

    this.comparator = obj.comparator;
  }

  toString () {
    const {subject, comparator, object} = this;
    return `${subject} ${comparator} ${object}`;
  }
}

module.exports = FilterNode;
