var mongoose = require( 'mongoose' );
var user     = mongoose.model( 'user' );
var error;

exports.profile = function(req, res, next) {
    //var author = quotes[req.params.id].author;
    res.render('profile', { title: 'NinjaMine | Profile page - in production'});
    
};
exports.profile_post_handler = function(req, res) {

};