(function() {
  requirejs.config({
    baseUrl: 'javascript',
    paths: {
      'jquery': 'bower_components/jquery/jquery.min'
    },
    shim: {
      'underscore': {
        exports: '_'
      },
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

}).call(this);
