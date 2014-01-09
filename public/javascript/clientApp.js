(function() {
  define(['jquery', 'underscore', 'backbone', 'models/TrustyApp', 'views/TrustyAppView'], function($, _, Backbone, TrustyApp, TrustyAppView) {
    return {
      initialize: function() {
        var trustyApp, trustyAppView,
          _this = this;
        trustyApp = new TrustyApp();
        trustyAppView = new TrustyAppView({
          model: trustyApp
        });
        trustyAppView.render();
        return $(window).on('scroll', function() {
          if ($(window).scrollTop() < 0) {
            $(window).scrollTop(0);
          }
          if ($(window).scrollTop() > 2800) {
            return $(window).scrollTop(2800);
          }
        });
      }
    };
  });

}).call(this);
