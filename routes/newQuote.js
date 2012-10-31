var error;
exports.newQuote = function(req, res) {
	error = null;
	res.render('newQuote', {title: 'NinjaMine | New Quote', error:error});
}
exports.newQuote_post_handler = function(req, res) {
	if (typeof req.session.username == 'undefined') {
		error = 'You must be logged in to create a quote.';
	    res.render('newQuote', {title: 'NinjaMine | New Quote', error:error});
    }
    else {
    	res.redirect('/page?name=New');
    }
}