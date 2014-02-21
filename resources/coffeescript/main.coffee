requirejs.config
  paths:
    jquery: '../bower_components/jquery/jquery.min',
    underscore: '../bower_components/underscore-amd/underscore-min',
    backbone: '../bower_components/backbone-amd/backbone-min',
    templates: '../templates'

require(['clientApp'], (app) =>
  app.initialize()
) 
