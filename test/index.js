
const chai = require('chai');


const expect = chai.expect;
chai.should();

const prodash = require('../');

describe('prodash', function(){

  it('should destructure a function', function(done){
    const { aget } = prodash;
    aget.should.be.a('function');
    done();
  });

  it('should return lodash from a _', function(done){
    const { _ } = prodash;
    _.should.be.a('function');
    done();
  });

  it('should call a lodash function with a promise', function(done){
    const promise = Promise.resolve({some:{ nested: {prop: 1}}});
    const { aget } = prodash;
    aget(promise, 'some.nested.prop')
      .then(function(val) {
        val.should.equal(1);
        done();
      })
      .catch(function(error) {
        done(error);
      });

  });

});
