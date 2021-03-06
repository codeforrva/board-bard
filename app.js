var express = require('express'),
    // routes = require('./routes'),
    util = require('util'),
    path = require('path'),
    fs = require('fs'),
    querystring = require('querystring'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    csrf = require('csrf'),
    http = require('http');

config = require(path.join(__dirname, 'lib', 'config'));

var app = express();

// App setup
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

// Public assets
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/',function(request, response) {
});

app.get('*',function(request, response) {
    response.status(403).send();
});

app.get('/json',function(request, response) {
    http.get('https://vacode.org/api/structure/?key=BTailEVQw5FZ4mHS',function(response){
        console.log(response);
    });
});

// Fire up our server
if (require.main === module) {
  http.createServer(app).listen(app.get('port'), function() {
    console.info('Express server listening on port ' + app.get('port'));
  });
} else {
  console.info('Running app as a module');
  exports.app = app;
}

