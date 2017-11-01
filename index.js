var express = require('express');
var app = express();
var db = require('./db');
var routes = require('./app/routes');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', routes);
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || "127.0.0.1");

var server = app.listen(app.get('port'), app.get('host'), function() {
    console.log('Express server listening on port ' + app.get('host') + ':' + app.get('port'));
});

module.exports = app;