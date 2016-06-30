'use strict';

module.exports = ((opts, data) => {
  if (!data) {
    try {
      data = require.main.require('./package.json');
    } catch (e) {
      data = {};
    }
  }

  opts = Object.assign({
    name: true,
    version: true,
    author: true,
    homepage: true,
  }, opts || {});

  return function projectxMiddleware(req, res, next) {
    Object.keys(opts).forEach(key => {
      if (opts[key] === true && typeof data[key] === 'string') {
        res.set(`X-App-${module.exports.capitalize(key)}`, data[key]);
      }
    });

    return next();
  };
});

module.exports.middleware = module.exports();

module.exports.capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
