var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

module.exports = {
  
  route: function(app) {
    app.get('/', this.index);
    app.get('/projects', this.serveProject.bind(this));
  },

  index: function(app, res) {
    res.render('index');
  },

  serveProject: function(app, res) {
    var project = app.query.project;
    this.sendResponse(res, 'WAMMO');
  },

  sendResponse: function(res, value, statusCode, contentType) {
    statusCode = statusCode || 201;
    contentType = contentType || 'application/json';
    value = (typeof value === 'string') ? value : JSON.stringify(value);
    headers['content-type'] = contentType;
    res.writeHead(statusCode, headers);
    res.end(object);
  }

};
