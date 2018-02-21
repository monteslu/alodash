# prodash

[![NPM](https://nodei.co/npm/prodash.png?compact=true)](https://nodei.co/npm/prodash/)

[![Build Status](https://travis-ci.org/monteslu/prodash.svg?branch=master)](https://travis-ci.org/monteslu/prodash) [![Coverage Status](https://coveralls.io/repos/monteslu/prodash/badge.svg?branch=master)](https://coveralls.io/r/monteslu/prodash?branch=master)


Just a tiny proxy to promise-enable loash functions

## example

Simply an `a` to the lodash function you want to use

```javascript

const { aget } = require('prodash');

const promise = Promise.resolve({
  some:{
    deeply: {
      nested: {
        prop: 1
      }
    }
  }
});

const value = await aget(promise, 'some.deeply.nested.prop');
console.log(value);  // 1

```
