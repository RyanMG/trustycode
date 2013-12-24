(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/TrustyApp.html'], function($, _, Backbone, TrustyAppTemplate) {
    var TrustyAppView, _ref;
    TrustyAppView = (function(_super) {
      __extends(TrustyAppView, _super);

      function TrustyAppView() {
        _ref = TrustyAppView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TrustyAppView.prototype.el = $('body');

      TrustyAppView.prototype.render = function() {
        this.template = _.template(TrustyAppTemplate);
        return this.$el.append(this.template);
      };

      return TrustyAppView;

    })(Backbone.View);
    return TrustyAppView;
  });

}).call(this);
