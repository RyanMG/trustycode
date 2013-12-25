(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/sections/header.html'], function($, _, Backbone, about) {
    var AboutView, _ref;
    return AboutView = (function(_super) {
      __extends(AboutView, _super);

      function AboutView() {
        _ref = AboutView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AboutView.prototype.el = $('#about');

      AboutView.prototype.render = function() {
        this.template = _.template(about);
        return this.$el.html(this.template);
      };

      return AboutView;

    })(Backbone.View);
  });

}).call(this);
