'use strict';

var expect = require('chai').expect;

/* jshint maxlen: false */
describe('Basic :: ', function() {

  it('Sails.js should run', function() {
    expect(sails).to.be.ok;
  });

  it('opbeat hook should load', function() {
    expect(sails.hooks.opbeat).to.be.ok;
    expect(sails.opbeat).to.be.ok;
  });

  it('opbeat variable should have captureError method', function () {
    expect(sails.opbeat).to.have.property('captureError')
      .and.to.be.a('function');
  });

  it('opbeat should have middleware.express', function () {
    expect(sails.opbeat).to.have.property('middleware')
      .and.to.be.an('object');
    expect(sails.opbeat.middleware).to.have.property('express')
      .and.to.be.a('function');
  });
});
