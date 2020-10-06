/* eslint-disable no-undef */
const { describe } = require('mocha')
const { expect } = require('chai')

const lib = require('../lib')

describe('Check test suit', function () {
  it('should run', function () {
    return expect(true).to.be.true
  })
})

describe('Test suit for ƒ sayHello', function () {
  it('should be a string', function () {
    const arg = 'drozerah'
    return expect(lib.sayHello(arg)).to.be.a('string')
  })
  it('should throw with TypeError', function () {
    return expect(lib.sayHello.bind()).to.throw(TypeError, 'ERR_INVALID_ARG_TYPE')
  })
  it('should throw with TypeError', function () {
    const arg = 10
    return expect(lib.sayHello.bind(arg)).to.throw(TypeError, 'ERR_INVALID_ARG_TYPE')
  })
})
