# alodash

[![NPM](https://nodei.co/npm/alodash.png?compact=true)](https://nodei.co/npm/alodash/)

[![Build Status](https://travis-ci.org/monteslu/alodash.svg?branch=master)](https://travis-ci.org/monteslu/alodash) [![Coverage Status](https://coveralls.io/repos/monteslu/alodash/badge.svg?branch=master)](https://coveralls.io/r/monteslu/alodash?branch=master)


Just a tiny proxy to promise-enable [lodash](https://lodash.com/) functions

## example

Simply add an `a` to the lodash function you want to use:

```javascript

const { aget } = require('alodash');

const promise = Promise.resolve({some:{deeply:{nested:{prop:1}}}});

const value = await aget(promise, 'some.deeply.nested.prop');
console.log(value);  // 1

```

Any of the function parameters can be a value, a promise, or function.
