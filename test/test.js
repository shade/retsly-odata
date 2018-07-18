const Retsly = require('../src/index')
const assert = require('assert')

describe('No param routes', () => {
  describe('Property', () => {
    it('should return a list of properties and get one', done => {
      let r = new Retsly(Retsly.TEST_TOKEN, 'test')
      r.Property()
      r.exec(done)
      console.log(r.url())
    })
  })

  describe('OpenHouse', () => {
    it('should return a list of OpenHouse and get one', done => {
      let r = new Retsly(Retsly.TEST_TOKEN, 'test')
        .OpenHouse()
        .exec(done)
    })
  })

  describe('Office', () => {
    it('should return a list of Office and get one', done => {
      let r = new Retsly(Retsly.TEST_TOKEN, 'test')
        .Office()
        .exec(done)
    })
  })

  describe('Member', () => {
    it('should return a list of Member and get one', done => {
      let r = new Retsly(Retsly.TEST_TOKEN, 'test')
        .Member()
        .exec(done)
    })
  })
})
