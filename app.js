/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var crypto = require('crypto');
/***************************/


username = undefined;


var express = require('express')
var ninja = require('./routes/ninja')
  , user = require('./routes/user')
  , signup = require('./routes/signup')
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
///////////////////////////routes//////////////////////////////
app.get('/login', ninja.login);
app.get('/', ninja.home);
app.get('/user/:id', ninja.profile);
app.get('/users', user.list);

// display the list of quotes
app.get('/quotes', ninja.quotes);
// show individual quote
app.get('/quote/:id', ninja.quote);
// show general pages
app.get('/page', ninja.page);
app.get('/logout', function(req, res) {
    // delete the session variable
    delete req.session.username;
    // redirect user to homepage
    res.redirect('/');
});
app.get('/signup', signup.form);
app.get('/signup/success', signup.signupSuccess);
app.get('/signup/failure',signup.signupFailure);

app.post('/signup', signup.form_post_handler);
app.post('/', ninja.home_post_handler);
app.post('/login', ninja.login_post_handler);
app.post('/user/:id', ninja.profile_post_handler);

//error_handling
app.get('/success', ninja.success);
app.get('/failure', ninja.failure);
//
////////////////////////////endroutes///////////////////////////////





http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
