/**
 * Module dependencies.
 */
var crypto = require('crypto');
require( './db' );
   
/***************************/
   
var username = undefined;
var temp = undefined;

var express = require('express')
var ninja = require('./routes/ninja')
  , user = require('./routes/user')
  , profile = require('./routes/profile')
  , signup = require('./routes/signup')
  , login = require('./routes/login')
  , newStory = require('./routes/newStory')
  , search = require('./routes/search')
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

app.get('/search_results', search.results);

app.get('/', ninja.home);

app.get('/user/:id', profile.profile);
app.get('/users', user.default);
   
app.get('/login', login.login);
app.get('/login/success', login.loginSuccess);
app.get('/login/failure',login.loginFailure);
// display the list of stories
app.get('/stories', ninja.stories);
// show individual story
app.get('/story/:id', ninja.stories);
// show general pages
app.get('/new', newStory.newStory);
app.get('/page', ninja.page);
app.get('/logout', function(req, res) {
    // delete the session variable
    delete req.session.username;
    username = undefined; 
    // redirect user to homepage
    res.redirect('/');
});
app.get('/signup', signup.form);
app.get('/signup/success', signup.signupSuccess);
app.get('/signup/failure',signup.signupFailure);

app.post('/search_results', search.results_post_handler);
app.post('/signup', signup.form_post_handler);
app.post('/', ninja.home_post_handler);
app.post('/login', login.login_post_handler);
app.post('/user/:id', ninja.profile_post_handler);
app.post('/new', newStory.newStory_post_handler); 

//error_handling
app.get('/success', ninja.success);
app.get('/failure', ninja.failure);
// 
////////////////////////////endroutes///////////////////////////////
   
   
   
   
   
http.createServer(app).listen(app.get('port'), function(){
  console.log("crowdhub server listening on port " + app.get('port'));
});
