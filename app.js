var express = require('express'),
    // routes = require('./routes'),
    util = require('util'),
    path = require('path'),
    fs = require('fs'),
    querystring = require('querystring'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    csrf = require('csrf');

config = require(path.join(__dirname, 'lib', 'config'));

var app = express();

// App setup
app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

// Public assets
app.use(express.static(__dirname + '/public'));

// Fire up our server
if (require.main === module) {
  http.createServer(app).listen(app.get('port'), function() {
    console.info(c.blue + 'Express server listening on port ' + app.get('port') + c.reset);
  });
} else {
  console.info(c.blue + 'Running app as a module' + c.reset);
  exports.app = app;
}

