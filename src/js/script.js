window.addEventListener('DOMContentLoaded',  () => {

  'use strict';
let modal = require('./parts/modal.js'),
    form = require('./parts/form.js'),
    valid = require('./parts/valid.js'),
    calc = require('./parts/calc.js'),
    filter = require('./parts/filter.js'),
    slider = require('./parts/slider.js'),
    accordion = require('./parts/accordion.js');
    // timer = require('./parts/timer.js'),

  modal();
  form();
  valid();
  calc();
  filter();
  slider();
  accordion();
  // timer();
});