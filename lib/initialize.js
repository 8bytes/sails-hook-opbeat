'use strict';

var _ = require('lodash');

module.exports = function(app) {

  return function(cb) {

    var config = _.defaults(app.config[this.configKey], require('./defaults'));

    //Init Sails.js loger for Opbeat
    if (!config.logger) {
      config.logger = app.log;
    }
    var opbeat = require('opbeat').start(config);

    app.once('hook:http:loaded', function() {
      app.hooks.http.server.use(opbeat.middleware.express());
    });

    // bind to global sails variable
    app.opbeat = opbeat;
    cb();
  };
};
