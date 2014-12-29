/** @jsx React.DOM */
'use strict';

var React = require('react');

var PhotoScroller = React.createClass({
  getInitialState: function() {
    return {
      album: {
        name: "",
        desc: "",
        dir: "",
        photos: []
      }
    }
  },

  componentDidMount: function() {
    this.setupHorizontalScrolling();

    this.initAlbum();
  },

  componentDidUpdate: function(prevProps, prevState) {
    if(prevProps.albums !== this.props.albums || prevProps.params.albumName !== this.props.params.albumName) {
      this.initAlbum();

      $('.photo-container').scrollLeft(0);
    }
  },

  setupHorizontalScrolling: function() {
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

  initAlbum: function() {
    var album = this.props.albums.filter(function(album){
        return album.dir === this.props.params.albumName;
      }.bind(this))[0];

    if(album) {
      this.setState({album: album});
    }
  },

  resizePhotoList: function() {
    $('.photo-scroller').width(
      $(".photo-list").children().toArray().reduce(
        function(prev, next, index){ return (index === 1 ? prev.offsetWidth : prev) + next.offsetWidth;
    }) + 5);
  },

  buildPhotoList: function () {
    return (
        this.state.album.photos.map(function(photo){
          return <li key={photo}><img src={this.props.serverUrl + this.state.album.dir + '/' + photo} onLoad={this.resizePhotoList} /></li>
        }.bind(this))
    );
  },

  render: function () {
    return (
      <div className=" photo-container">
        <div className="photo-scroller">
          <ul className="photo-list">
            { this.buildPhotoList() }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = PhotoScroller;
