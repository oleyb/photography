/** @jsx React.DOM */

var React = require('react'),
    Header = require('./header');

var App = React.createClass({
  getInitialState: function() {
    return {albums: ["acro", "unicycling"]};
  },
  render: function () {
    return (
      <div className="inline">
        <Header/>
        <this.props.activeRouteHandler />
      </div>
    );
  }
});

module.exports = App;
