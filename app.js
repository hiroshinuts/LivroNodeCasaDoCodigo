var express = require('express');
var load = require('express-load');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-load');
var bodyParser = require('body-parser')

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.cookieParser('ntalk')); EXPRESS 3
//app.use(express.session()); EXPRESS 3
//app.use(express.json()); EXPRES 3
//app.use(express.urlencoded()); EXPRESS 3
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true })); //express 4
app.use(bodyParser.json());


load('models')
  .then('controllers')
  .then('routes')
  .into(app);


app.listen(3000, function(){
  console.log("Ntalk no ar.");
});

