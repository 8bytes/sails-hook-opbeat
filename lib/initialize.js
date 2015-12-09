'use strict';

var _ = require('lodash');

module.exports = function(app) {

  return function(cb) {

    var config = _.defaults(app.config[this.configKey], require('./defaults'));
    var opbeat = require('opbeat').start(config);
    // bind to global sails variable
    app.opbeat = opbeat;
    cb();
  };
};
