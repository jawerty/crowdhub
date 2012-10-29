	

//success and failure
exports.success = function(req, res) {
  res.render('error_handling/success');
};
exports.failure = function(req, res) {
  res.render('error_handling/failure');
};
//end



// handler for homepage
exports.home = function(req, res) {
if (typeof req.session.username == 'undefined') {
	res.render('login', { title: 'NinjaMine | Login'});
}
else {res.redirect('/quotes');}
};

// handler for form submitted from homepage
exports.home_post_handler = function(req, res) {
    // if the username is not submitted, give it a default of "Anonymous"
    username = req.body.username;
    // store the username as a session variable
    req.session.username = username;
    // redirect the user to homepage
    res.redirect('/');
};


// handler for displaying the items
exports.quotes = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    //if (typeof req.session.username == 'undefined') {
    //	username = undefined;
    //	res.redirect('/');
    //}
    //else {
    	res.render('quotes', { title: 'NinjaMine | Quotes', quotes:quotes });
	//}
};

// handler for displaying individual items
exports.quote = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    
        var author = quotes[req.params.id].author;
        var quote = quotes[req.params.id].quote;
        res.render('quote', { title: 'NinjaMine | ' + author, username: req.session.username, author:author, quote:quote });
    
};
// handler for showing simple pages
exports.page = function(req, res) {
    var name = req.query.name;
    var contents = {
        about: 'NinjaMine is a website where users post, like, and share their own quotes. \
        		All quotes posted to NinjaMine user-generated, so they must come from the minds \
        		of <b>YOU</b>, the user. This website is currently in in the 0.0.1 stage. However, \
        		updates on development and progress will be committed and shared on the site\'s github. \
        		<br><br><a href=\'https://github.com/jawerty/ninjamine\'>Ninjamine\'s GitHub</a>',
        contact: 'You can contact the developers here:<br>Jared Wright - email: jawerty210@gmail.com<br><br>My personal website is <a href=\'http://wrightdev.herokuapp.com\'>here</a>',
        blog: 'The blog is currently in production...'
    };
    res.render('page', { title: 'NinjaMine | ' + name, username: req.session.username, content:contents[name] });
};


exports.profile = function(req, res) {
	if (typeof req.session.username == 'undefined') {
		username = undefined;
		res.redirect('/');
	}
    else {
        var author = quotes[req.params.id].author;
        var quote = quotes[req.params.id].quote;
        res.render('profile', { title: 'NinjaMine | ' + author, username: req.session.username, author:author, quote:quote });
    }
}
//exports.profile_post_handler = function(req, res) {
//	res.redirect('/user/:id');
//}