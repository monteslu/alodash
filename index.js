const _ = require('lodash');
const proxyTarget = { _ };

const funcHandler = {
  get: function(target, name) {
    if(name in target) {
      return target[name];
    }

    return function (obj, ...args) {
      return Promise.resolve(obj)
        .then(function (result) {
          const params = args.unshift(result);
          return _[name.substring(1)].apply(null, args);
        });
    }
  }
};

module.exports = new Proxy(proxyTarget, funcHandler);
