/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Header = require('./header');

var App = React.createClass({
  getInitialState: function() {
    return {
      url: "https://dl.dropboxusercontent.com/spa/jm3att7sw7mu6d5/photo/public/",
      dataUrl: "portfolio.json",
      portfolio : {
        albums: [
          {
            name: "",
            dir: "loading",
            photos: []
          }
        ]
      }
    };
  },
  componentDidMount: function() {
    $.get(this.state.url + this.state.dataUrl, function(data) {
      console.log("LOL");
      this.setState({portfolio: JSON.parse(data)});
    }.bind(this));
  },
  render: function () {
    return (
      <div className="inline">
        <Header albumNames={this.state.portfolio.albums.map(function(album){return {name: album.name, dir: album.dir};})}/>
        <this.props.activeRouteHandler serverUrl={this.state.url} albums={this.state.portfolio.albums}/>
      </div>
    );
  }
});

module.exports = App;
