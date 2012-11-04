var error;
exports.newStory = function(req, res) {
	error = null;
	res.render('newStory', {title: 'crowdhub | New Story', error:error});
}
exports.newQuote_post_handler = function(req, res) {
	if (typeof req.session.username == 'undefined') {
		error = 'You must be logged in to create a story.';
	    res.render('newStory', {title: 'crowdhub | New Story', error:error});
    }
    else {
    	res.redirect('/page?name=New');
    }
}