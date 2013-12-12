var path = require('path');

exports.settings = function(app, express){
  app.use(app.router);
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/../views');
  app.set("view engine", "jade");
  app.use(express.static(path.join(__dirname, '/../public')));
};