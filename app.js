var crypto = require('crypto');

username = "Guest";
/**
 * Module dependencies.
 */
/**Mongolian**/
var Mongolian = require('mongolian');
var server, db;

if(process.env.MONGOHQ_URL) {
  db = new Mongolian(process.env.MONGOHQ_URL);
} else {
  server = new Mongolian;
  db = server.db('ninjamineDB');
}
var usersTBL = db.collection("Users");
var quoteTBL = db.collection("Quotes");

var password = "blueco";

crypto.createHash('md5').update(password).digest("hex");
usersTBL.insert({
  id: 0,
  first: "Jared",
  last: "Wright",
  username: "Admin",
  password: password,
  email: "jawerty210@gmail.com",
  bio: "I am the BDFL."
})

/***********/
var express = require('express')
var ninja = require('./routes/ninja')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/login', ninja.login);
app.get('/', ninja.home);
app.get('/users', user.list);
// display the list of quotes
app.get('/quotes', ninja.quotes);
// show individual quote
app.get('/user/:id', ninja.quote);
// show general pages
app.get('/page', ninja.page);
app.get('/logout', function(req, res) {
    // delete the session variable
    delete req.session.username;
    // redirect user to homepage
    res.redirect('/');
});
app.post('/', ninja.home_post_handler);
app.post('/login', ninja.login_post_handler);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
