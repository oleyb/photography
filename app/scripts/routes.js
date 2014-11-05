/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Routes = require('react-router').Routes,
    Route = require('react-router').Route,
    DefaultRoute = require('react-router').DefaultRoute,
    App = require('./app'),
    PhotoScroller = require('./photo-scroller')

module.exports = (
  <Routes location='hash'>
    <Route name='home' path="/" handler={App}>
      <Route name='album' path="album/:albumName" handler={PhotoScroller} />
    </Route>
  </Routes>
);
