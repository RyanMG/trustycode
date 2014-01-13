var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var config = require('../config/config'),
    db = config['development'],
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(db.database, db.username, db.password, {
      dialect: 'mysql',
      port: db.port
    });

sequelize.sync();

module.exports = {
  
  route: function(app) {
    app.get('/', this.index);
    app.get('/projects', this.serveProject.bind(this));
  },

  index: function(app, res) {
    res.render('index');
  },

  serveProject: function(app, res) {
    console.log(app.query.project);
    var project = config.projectList[app.query.project];
    console.log(project);
    this.sendResponse(res, project);
  },

  sendResponse: function(res, value, statusCode, contentType) {
    statusCode = statusCode || 200;
    contentType = contentType || 'application/json';
    value = (typeof value === 'string') ? value : JSON.stringify(value);
    headers['content-type'] = contentType;
    res.writeHead(statusCode, headers);
    res.end(value);
  }

};
