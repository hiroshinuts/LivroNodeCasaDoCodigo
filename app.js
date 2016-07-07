var express = require('express');
//var routes = require('/routes');
var load = require('express-load');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');


////////////EXPRESS4////////////////////////////////////////////
///Var de Seg. chat
const KEY = 'ntalk.sid',SECRET = 'ntalk';
var store = new session.MemoryStore();
var sessOpts = {secret:SECRET,key:KEY,store:store,resave: true,
                  saveUninitialized: true};
///////////////////////////////////////////////////////////////


app.use(session(sessOpts));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//app.use(express.cookieParser('ntalk')); EXPRESS 3
//app.use(express.session()); EXPRESS 3
//app.use(express.json()); EXPRES 3
//app.use(express.urlencoded()); EXPRESS 3
app.use(bodyParser.urlencoded({ extended: true })); //express 4
app.use(bodyParser.json()); // express 4

//app.get('/', routes.index);
//app.get('/usuarios' routes.user.index);


load('models')
  .then('controllers')
  .then('routes')
  .into(app);


app.listen(3000, function(){
  console.log("Ntalk no ar.");
});

