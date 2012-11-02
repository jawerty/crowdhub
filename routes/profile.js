var mongoose = require( 'mongoose' );
var user     = mongoose.model( 'user' );
var error;

exports.profile = function(req, res, next) {
    /*
    if (req.params.id == //username in database){
        //display page with contents according to user's document.
    }
    */
    res.render('profile', { title: 'NinjaMine | Profile page - in production'});
    
};
exports.profile_post_handler = function(req, res) {

};