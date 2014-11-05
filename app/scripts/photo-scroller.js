/** @jsx React.DOM */

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
    var totalWidth = 0;

    $(".photo-list").children().each(function() {
          totalWidth = totalWidth + $(this).width();
    });

    $('.photo-scroller').width(totalWidth);
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

    this.resizePhotoList();
  },

  componentWillReceiveProps: function(newProps) {
    //this.props = newProps;
  },

  componentDidUpdate: function(prevProps, prevState) {
    this.resizePhotoList();
  },

  render: function () {
    return (
      <div className="container-fluid photo-container">
        <div className="photo-scroller">
          <ul className="photo-list">
            {this.state.photos.map(function(photo){
              return <li><img src={photo} /></li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = PhotoScroller;
