(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/sections/header.html'], function($, _, Backbone, header) {
    var HeaderView, _ref;
    HeaderView = (function(_super) {
      __extends(HeaderView, _super);

      function HeaderView() {
        _ref = HeaderView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      HeaderView.el = $('#top');

      HeaderView.prototype.render = function() {
        this.template = _.template(header);
        return this.$el.html(this.template);
      };

      return HeaderView;

    })(Backbone.View);
    return HeaderView;
  });

}).call(this);
