var express = require('express');
var path = require('path');
var controllers = require('./server/controllers');
var middleware = require('./server/middleware');

var app = express();
middleware.settings(app, express);

controllers.route(app);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
