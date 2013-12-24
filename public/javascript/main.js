(function() {
  var _this = this;

  requirejs.config({
    baseUrl: 'javascript',
    paths: {
      'jquery': '../bower_components/jquery/jquery.min'
    },
    shim: {
      '../bower_components/underscore/underscore-min': {
        exports: '_'
      },
      '../bower_components/backbone/backbone-min': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  require(['models/TrustyApp', 'views/TrustyAppView'], function(TrustyApp, TrustyAppView) {
    var trustyApp, trustyAppView;
    trustyApp = new TrustyApp();
    trustyAppView = new TrustyAppView({
      model: trustyApp
    });
    return trustyAppView.render();
  });

}).call(this);
