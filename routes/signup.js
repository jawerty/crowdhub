exports.form = function(req, res) {
	res.render('signup', {title: 'NinjaMine | Sign Up'});
}
exports.form_post_handler = function(req, res) {
    // if the username is not submitted, give it a default of "Anonymous"
    password1 = res.body.password1 || 'Anon';
    if (password1) {
    alert('password');
    }
    
    // redirect the user to homepage
    res.redirect('/signup');
};