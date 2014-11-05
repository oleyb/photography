/** @jsx React.DOM */
'use strict';

var React = require('react'),
    routes = require('./routes');

if ('production' !== process.env.NODE_ENV) {
  // Enable React devtools
  window['React'] = React;
}

React.render(routes, $('.app')[0]);
