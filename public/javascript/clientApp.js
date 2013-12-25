(function() {
  define(['jquery', 'underscore', 'backbone', 'models/TrustyApp', 'views/TrustyAppView'], function($, _, Backbone, TrustyApp, TrustyAppView) {
    return {
      initialize: function() {
        var trustyApp, trustyAppView;
        trustyApp = new TrustyApp();
        trustyAppView = new TrustyAppView({
          model: trustyApp
        });
        return trustyAppView.render();
      }
    };
  });

}).call(this);
