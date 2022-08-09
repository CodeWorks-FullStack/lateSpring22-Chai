const ValuesService = require('../src/ValuesService.js').ValuesService
const chai = require('chai')
const expect = require('chai').expect
const spies = require('chai-spies')

chai.use(spies)

function find(obj) {
  return [{ _id: 1, name: "value 1" }, { _id: 1, name: "value 1" }]
}

const findSpy = chai.spy(find)


const fakeDb = {
  Values: {
    find: findSpy
  }
}

describe("The Values Service Tests", function() {
  it("Has a getAll Method", function(done) {
    const sut = new ValuesService({})
    expect(sut.getValues).to.be.a("function", "You must have a getValues method")
    done()
  })
  it("Get All Uses DBContext.find", function() {
    const sut = new ValuesService(fakeDb)
    sut.getValues()
    expect(findSpy).to.have.been.called()
  })
})