const Retsly = require('../src/index')
const assert = require('assert')

describe('No param routes', () => {
  describe('Properties', () => {
    it('should return a list of properties and get one', done => {
      let r = new Retsly(Retsly.ACCESS_TOKEN, 'test')
        .Properties()
        .exec(done)
    })
  })

  describe('Media', () => {
    it('should return a list of Media and get one', done => {
      let r = new Retsly(Retsly.ACCESS_TOKEN, 'test')
        .Media()
        .exec(done)
    })
  })

  describe('Openhouse', () => {
    it('should return a list of Openhouse and get one', done => {
      let r = new Retsly(Retsly.ACCESS_TOKEN, 'test')
        .Openhouse()
        .exec(done)
    })
  })

  describe('Office', () => {
    it('should return a list of Office and get one', done => {
      let r = new Retsly(Retsly.ACCESS_TOKEN, 'test')
        .Office()
        .exec(done)
    })
  })

  describe('Member', () => {
    it('should return a list of Member and get one', done => {
      let r = new Retsly(Retsly.ACCESS_TOKEN, 'test')
        .Member()
        .exec(done)
    })
  })
})
