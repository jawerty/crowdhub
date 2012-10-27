exports.form = function(req, res) {
	res.render('signup', {title: 'NinjaMine | Sign Up'});
}
exports.form_post_handler = function(req, res) {
    password1 = req.body.password1;
    password2 = req.body.password2; 
    if (password1 != password2) {
		res.redirect('/failure');
    }else{
    	res.redirect('/success');
    }

};
