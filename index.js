const _ = require('lodash');
const proxyTarget = { _ };

const funcHandler = {
  get: function(target, name) {
    if(name in target) {
      return target[name];
    }

    return function (...args) {
      // const pargs = _.map(args, function(arg) {
      //   if(typeof arg === 'function') {
      //     return arg;
      //   }
      //   return Promise.resolve(arg);
      // });

      const pargs = _.map(args, Promise.resolve);

      return Promise.all(pargs)
        .then(function(resolvedArgs) {
          return _[name.substring(1)].apply(null, resolvedArgs);
        });
    }
  }
};

module.exports = new Proxy(proxyTarget, funcHandler);
