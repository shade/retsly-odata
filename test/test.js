const Retsly = require('../src/index')
const assert = require('assert')
const TEST_TOKEN = '6baca547742c6f96a6ff71b138424f21'

describe('No param routes', () => {
  describe('Properties', () => {
    it('should return a list of properties', done => {
      let r = new Retsly(TEST_TOKEN, 'Properties')
      r.dataset('test')
      r.exec(done)
    })
  })

  describe('Media', () => {
    it('should return a list of Media', done => {
      let r = new Retsly(TEST_TOKEN, 'Media')
      r.dataset('test')
      r.exec(done)
    })
  })

  describe('Openhouse', () => {
    it('should return a list of Openhouse', done => {
      let r = new Retsly(TEST_TOKEN, 'Openhouse')
      r.dataset('test')
      r.exec(done)
    })
  })

  describe('Office', () => {
    it('should return a list of Office', done => {
      let r = new Retsly(TEST_TOKEN, 'Office')
      r.dataset('test')
      r.exec(done)
    })
  })

  describe('Member', () => {
    it('should return a list of Member', done => {
      let r = new Retsly(TEST_TOKEN, 'Member')
      r.dataset('test')
      r.exec(done)
    })
  })
})
