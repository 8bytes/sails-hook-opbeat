'use strict';

var path = require('path');
var config = require(path.resolve('config/opbeat')).opbeat;

(function() {
  global.opbeat = require('opbeat').start(config);
})();
