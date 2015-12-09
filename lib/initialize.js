
var _ = require('lodash');

module.exports = function(app) {

  return function(cb) {

    if (!opbeat) {
      reutrn cb('Opbeat was not initialized');
    }

    // var config = _.defaults(app.config[this.configKey], require('./defaults'));

    //Init Sails.js loger for Opbeat
    // if (!config.logger) {
    //   config.logger = app.log;
    // }
    // var opbeat = require('opbeat').start(config);

    // bind to global sails variable
    app.opbeat = opbeat;
    cb();
  };
};
