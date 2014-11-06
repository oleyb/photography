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
                <li><Link to="album" params={{albumName: "woodling"}}>The Woodling</Link></li>
                <li><Link to="album" params={{albumName: "acro"}}>Acro Yoga</Link></li>
                <li><Link to="album" params={{albumName: "unicycling"}}>Unicycling</Link></li>
                <li><Link to="album" params={{albumName: "misc"}}>Misc</Link></li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Header;
