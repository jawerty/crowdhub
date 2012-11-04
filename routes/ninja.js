  	
/**DEPENDENCIES**/
var mongoose = require( 'mongoose' );
var user     = mongoose.model( 'user' );
  
/*************/
  
//success and failure
exports.success = function(req, res) {
  res.render('error_handling/success');
};
exports.failure = function(req, res) {
  res.render('error_handling/failure');
};
//end
    
var stories = {
    Jared:{author:'Jared Wright (BDFL)', story:"Hello World!", },
    Jawerty:{author:'Jawerty', story:"I went to the park and saw a duck."},
    Ninjaminder:{author:'crowdhubman', story:"I didn't chose the crowdhub life, crowdhub chose me."}
};
// handler for homepage
exports.home = function(req, res) {
    if (typeof req.session.username == 'undefined') {
    res.redirect('/login');
    }
    else {
    res.redirect('/stories');
    }
};
  
// handler for form submitted from homepage
exports.home_post_handler = function(req, res) {
  
};
  
  
// handler for displaying the items
exports.stories = function(req, res) {
    //don't let nameless people view the items, redirect them back to the homepage
    //if (typeof req.session.username == 'undefined') {
    //	username = undefined;
    //	res.redirect('/');
    //}
    //else {
    	res.render('stories', { title: 'crowdhub | Stories', stories:stories });
  	//}
};
  
// handler for displaying individual items
exports.story = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    
  
        res.render('story', { title: 'crowdhub | Story page - in production'});
    
};
// handler for showing simple pages
exports.page = function(req, res) {
    var name = req.query.name;
    var contents = {
        about: 'crowdhub is a website where users post, like and share their own news stories. \
        		All stories posted to crowdhub are user-generated. This website is currently in its 0.0.1 version. However, \
        		updates on development and progress will be committed and shared on the site\'s GitHub. \
        		<br><br><a href=\'https://github.com/jawerty/crowdhub\'>crowdhub\'s GitHub</a>',
        contact: 'You can contact the developers here:<br>Jared Wright - email: jawerty210@gmail.com<br><br>My personal website is <a href=\'http://wrightdev.herokuapp.com\'>here</a>',
        blog: 'The blog is currently in production...',
        New: 'Story creation is currently in development.'
    };
    res.render('page', { title: 'crowdhub | ' + name, username: req.session.username, content:contents[name] });
};
  
  
  