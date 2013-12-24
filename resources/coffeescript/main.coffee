requirejs.config
  baseUrl: 'javascript',
  paths:
    'jquery': '../bower_components/jquery/jquery.min'
  shim:
    '../bower_components/underscore/underscore-min':
      exports: '_'
    '../bower_components/backbone/backbone-min':
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'

require(['models/TrustyApp', 'views/TrustyAppView'], (TrustyApp, TrustyAppView) =>
  trustyApp = new TrustyApp()
  trustyAppView = new TrustyAppView { model: trustyApp }
  trustyAppView.render()
) 
