window.addEventListener('DOMContentLoaded', function () {

  'use strict';
let modal = require('./parts/modal.js'),
    form = require('./parts/form.js'),
    valid = require('./parts/valid.js'),
    calc = require('./parts/calc.js'),
    filter = require('./parts/filter.js');
    // slider = require('./parts/slider.js'),
    // tabs = require('./parts/tabs.js'),
    // timer = require('./parts/timer.js'),

  modal();
  form();
  valid();
  calc();
  filter();
  // slider();
  // tabs();
  // timer();
});