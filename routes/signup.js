exports.form = function(req, res) {
	res.render('signup', {title: 'NinjaMine | Sign Up'});
}
exports.form_post_handler = function(req, res) {
    // if the username is not submitted, give it a default of "Anonymous"
    username = req.body.username || 'Anonymous';
    
    // redirect the user to homepage
    res.redirect('/signup');
};