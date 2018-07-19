let filter = require('../src/filter')
const assert = require('assert')


describe('Simple filters', () => {
  describe('eq/neq/le/gte/gt', () => {
    it('Should work without a variable', () => {
      let f = new filter({
        left: 'a',
        comparator: 'eq',
        right: 'b'
      })

      assert.equal(f.toString(), 'a eq b')
      f.comparator('neq')
      assert.equal(f.toString(), 'a neq b')
      f.comparator('ge')
      assert.equal(f.toString(), 'a ge b')
      f.comparator('gt')
      assert.equal(f.toString(), 'a gt b')
      f.comparator('lt')
      assert.equal(f.toString(), 'a lt b')
    })

    it('Should work recursively', () => {
      let f = new filter({
        left: {
          left: 'a',
          comparator: 'eq',
          right: 'b'
        },
        comparator: 'eq',
        right: {
          left: 'a',
          comparator: 'eq',
          right: 'c'
        }
      })
      
    })
  })
})
