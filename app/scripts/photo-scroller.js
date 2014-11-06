/** @jsx React.DOM */
'use strict';

var React = require('react');

var PhotoScroller = React.createClass({
  getInitialState: function () {
    var photos = [];

    for(var i = 1; i<=101; i++){
      photos.push("photos/MaraHike/MaraHike-"+i+".jpg");
    }
    return {photos: photos};
  },

  resizePhotoList: function() {
    $('.photo-scroller').width(
      $(".photo-list").children().toArray().reduce(
        function(prev, next, index){ return (index === 1 ? prev.offsetWidth : prev) + next.offsetWidth + 5;
    }));
  },

  componentDidMount: function() {
    var photoContainer = $('.photo-container'),
        scrollHandler = function(e) {
          var delta = (e.detail ? e.detail * -10 : e.wheelDelta);
          photoContainer.scrollLeft( photoContainer.scrollLeft() - delta );

          e.preventDefault();
          e.stopPropagation();
        };

    window.addEventListener('DOMMouseScroll', scrollHandler, false);
    window.addEventListener('mousewheel', scrollHandler, false);
  },

  componentWillReceiveProps: function(newProps) {
    (this.props.params.albumName !== newProps.params.albumName) && $('.photo-container').scrollLeft(0);
  },

  buildPhotoList: function () {
    return (
        this.state.photos.map(function(photo){
          return <li><img src={photo} onLoad={this.resizePhotoList} /></li>
        }.bind(this))
    );
  },

  render: function () {
    return (
      <div className=" photo-container">
        <div className="photo-scroller">
          <ul className="photo-list">
            {this.buildPhotoList()}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = PhotoScroller;
