(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/sections/photo.html'], function($, _, Backbone, photo) {
    var PhotoView, _ref;
    PhotoView = (function(_super) {
      __extends(PhotoView, _super);

      function PhotoView() {
        _ref = PhotoView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PhotoView.prototype.el = $('#photography');

      PhotoView.prototype.events = {
        'click #photoPortfolio': 'loadPhotoPortfolio',
        'click #photoBack': 'backToMain'
      };

      PhotoView.prototype.render = function() {
        this.template = _.template(photo);
        return this.$el.html(this.template);
      };

      PhotoView.prototype.loadPhotoPortfolio = function() {
        $('.photoMain').animate({
          'margin-left': -$(window).width()
        }, 1000);
        return $('.photoPort').animate({
          'margin-left': -$(window).width()
        }, 1000);
      };

      PhotoView.prototype.backToMain = function() {
        console.log('test');
        $('.photoMain').animate({
          'margin-left': 0
        }, 1000);
        return $('.photoPort').animate({
          'margin-left': 0
        }, 1000);
      };

      return PhotoView;

    })(Backbone.View);
    return PhotoView;
  });

}).call(this);
