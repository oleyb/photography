/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className="photo-container">
        <img className="home-photo" src="https://dl.dropboxusercontent.com/spa/jm3att7sw7mu6d5/photo/public/acro/Acro-0-0.jpg" />
      </div>
    );
  }
});

module.exports = Home;
