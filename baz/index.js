'use strict';

const bar = require('bar');

module.exports = function makeBaz() {
  console.log('baz', bar());
};