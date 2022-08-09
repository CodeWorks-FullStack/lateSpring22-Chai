const Cube = require('../src/app').Cube
const expect = require('chai').expect


// Describe is a keyword to group tests
describe('Testing the Cube Functions', function() {
  // it is a test, first argument is the description, second is the function to run
  it('1. The side length of the Cube', function(done) {
    // each test creates all the data it needs
    let c1 = new Cube(2)
    // 1 test 1 job (S)
    expect(c1.getSideLength()).to.equal(2)
    done()
  })

  it('2. The surface area of the Cube', function(done) {
    let c2 = new Cube(5)
    expect(c2.getSurfaceArea()).to.equal(150)
    done()
  })

  it('3. The volume of the Cube', function(done) {
    let c3 = new Cube(7)
    expect(c3.getVolume()).to.equal(343)
    done()
  })

})