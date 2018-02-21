
const chai = require('chai');


const expect = chai.expect;
chai.should();

const alodash = require('../');

describe('alodash', function(){

  it('should destructure a function', function(done){
    const { aget } = alodash;
    aget.should.be.a('function');
    done();
  });

  it('should reject if not a lodash function', function(done){
    const { aNotALodashFunction } = alodash;
    aNotALodashFunction()
      .then(function(){
        done(new Error('should not get here'));
      })
      .catch(function(err) {
        done();
      });
  });

  it('should return lodash from a _', function(done){
    const { _ } = alodash;
    _.should.be.a('function');
    done();
  });


  it('should call a lodash function with a promise', function(done){
    const promise = Promise.resolve({some:{ nested: {prop: 1}}});
    const { aget } = alodash;
    aget(promise, 'some.nested.prop')
      .then(function(val) {
        val.should.equal(1);
        done();
      })
      .catch(function(error) {
        done(error);
      });
  });

  it('should call a lodash function without requiring a promise', function(done){
    const { amean } = alodash;
    amean([4, 2, 8, 6])
      .then(function(val) {
        val.should.equal(5);
        done();
      })
      .catch(function(error) {
        done(error);
      });
  });

  it('should call a lodash function with mutliple promise params', function(done){
    const { aclamp } = alodash;
    aclamp(Promise.resolve(-10), Promise.resolve(-5), Promise.resolve(5))
      .then(function(val) {
        val.should.equal(-5);
        done();
      })
      .catch(function(error) {
        done(error);
      });
  });

  it('should call a lodash function that has a function param', function(done){
    const { afind } = alodash;
    const users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ];
    afind(Promise.resolve(users), function(o) { return o.age < 40; })
      .then(function(val) {
        val.user.should.equal('barney');
        done();
      })
      .catch(function(error) {
        done(error);
      });
  });


});
