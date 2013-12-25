(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/TrustyApp.html', 'views/HeaderView', 'views/AboutView', 'views/CodeView', 'views/DesignView', 'views/PhotoView', 'views/ContactView'], function($, _, Backbone, trustyAppTemplate, headerView, aboutView, codeView, designView, photoView, contactView) {
    var TrustyAppView, views, _ref;
    views = Array.prototype.slice.call(arguments, 4);
    TrustyAppView = (function(_super) {
      __extends(TrustyAppView, _super);

      function TrustyAppView() {
        _ref = TrustyAppView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TrustyAppView.prototype.el = $('body');

      TrustyAppView.prototype.render = function() {
        var _this = this;
        this.template = _.template(trustyAppTemplate);
        this.$el.append(this.template);
        return _(views).each(function(view) {
          return _this.$el.append(view.render().el);
        });
      };

      return TrustyAppView;

    })(Backbone.View);
    return TrustyAppView;
  });

}).call(this);
