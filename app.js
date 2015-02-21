var express = require('express'),
    // routes = require('./routes'),
    util = require('util'),
    path = require('path'),
    fs = require('fs'),
    querystring = require('querystring'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    csrf = require('csrf');

config = require(path.join(__dirname, 'lib', 'config'));