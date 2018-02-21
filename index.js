const _ = require('lodash');
const proxyTarget = { _ };

const funcHandler = {
  get: function(target, name) {
    if(name in target) {
      return target[name];
    }

    return function (...args) {
      const pargs = args.map(function(arg) {
        return Promise.resolve(arg);
      });
      return Promise.all(pargs)
        .then(function(resolvedArgs) {
          return _[name.substring(1)].apply(null, resolvedArgs);
        });
    }
  }
};

module.exports = new Proxy(proxyTarget, funcHandler);
