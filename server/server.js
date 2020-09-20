'use strict';

var loopback =require('loopback');
var boot = require('loopback-boot');
var redis = require("redis"),
  client = redis.createClient();
require('dotenv').config()

var app = module.exports = loopback();

//token access in each user
app.use(loopback.token())
app.use(function (req, res, next) {
  app.currentUser = null;
  // console.log(req.accessToken);
  
  if (!req.accessToken) return next();
  req.accessToken.user(function (err, userId) {
    if (err) return next(err);
    // console.log(userId);
    req.currentUser = req.accessToken.userId;
    next();
  });
});

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};
client.on('connect', function () {
  console.log('Redis is  connected');
});
client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});


// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
