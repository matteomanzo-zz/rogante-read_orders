var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var server = http.createServer(app);
var db = require("./db");
var bodyParser = require('body-parser')
var Shoe = require('./app/model/shoe');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text({ type: 'text/html' }));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {

  // get all the users
  Shoe.find({}, function(err, shoes) {
    if (err) throw err;

  // object of all the users
    console.log(shoes);

    response.render('index', {shoes: shoes});
  });

});

server.listen(9999, function(){
  console.log('server has started');
});
