  
// handler for homepage
exports.home = function(req, res) {
    // if user is not logged in, ask them to login
    if (typeof req.session.username == 'undefined') res.render('login', { title: 'NinjaMine | Login'});
    // if user is logged in already, take them straight to the items list
    else res.redirect('/quotes');
};
// handler for form submitted from homepage
exports.home_post_handler = function(req, res) {
    // if the username is not submitted, give it a default of "Anonymous"
    username = req.body.username || 'Anonymous';
    // store the username as a session variable
    req.session.username = username;
    // redirect the user to homepage
    res.redirect('/');
};
// our 'database'
var quotes = {
    Jared:{author:'Jared Wright (BDFL)', quote:"Hello World!", },
    Jawerty:{author:'Jawerty', quote:"Ro Ro Fight the Power..."},
    Ninjaminder:{author:'Ninjaminder', quote:"I didn't chose the NinjaMine life, NinjaMine chose me."}
};

// handler for displaying the items
exports.quotes = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    if (typeof req.session.username == 'undefined') res.redirect('/');
    else res.render('quotes', { title: 'NinjaMine | Quotes', username: req.session.username, quotes:quotes });
};

// handler for displaying individual items
exports.quote = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    if (typeof req.session.username == 'undefined') res.redirect('/');
    else {
        var author = quotes[req.params.id].author;
        var quote = quotes[req.params.id].quote;
        res.render('quote', { title: 'NinjaMine | ' + author, username: req.session.username, author:author, quote:quote });
    }
};
// handler for showing simple pages
exports.page = function(req, res) {
    var name = req.query.name;
    var contents = {
        about: 'NinjaMine has the best user-generated quotes in THE WORLD.',
        contact: 'You can contact the developers here:<br>Jared Wright - email: jawerty210@gmail.com'
    };
    res.render('page', { title: 'NinjaMine | ' + name, username: req.session.username, content:contents[name] });
};
exports.login = function(req, res) {
	res.render('login', {title: 'NinjaMine | Login'});
}
exports.login_post_handler = function(req, res) {
    // if the username is not submitted, give it a default of "Anonymous"
    username = req.body.username || 'Anonymous';
    // store the username as a session variable
    req.session.username = username;
    // redirect the user to homepage
    res.redirect('/login');
};

exports.profile = function(req, res) {
	if (typeof req.session.username == 'undefined') res.redirect('/');
    else {
        var author = quotes[req.params.id].author;
        var quote = quotes[req.params.id].quote;
        res.render('profile', { title: 'NinjaMine | ' + author, username: req.session.username, author:author, quote:quote });
    }
}
//exports.profile_post_handler = function(req, res) {
//	res.redirect('/user/:id');
//}