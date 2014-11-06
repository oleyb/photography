/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Link = require('react-router').Link;

var Header = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a className="navbar-brand" href="#">Brian Oley Photography</a>

            </div>

            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                {this.props.albumNames.map(function(album){
                  return <li key={album.dir}><Link to="album" params={{albumName: album.dir}}>{album.name}</Link></li>;
                })}
              </ul>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Header;
