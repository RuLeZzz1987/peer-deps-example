'use strict';

const bar = require('bar');

module.exports = function makeBuz() {
  console.log('buz', bar());
  return 'return from BUZ';
};