var mongoose = require( 'mongoose' );
var user     = mongoose.model( 'user' );
var error;

exports.profile = function(req, res, next) {

    user.findOne({user_name: req.params.id}, function(err, profile) {
    	if(profile){
    		res.render('profile', { title: 'crowdhub | ' + req.params.id + '\'s Profile Page', header: req.params.id + ' Profile Page', username: req.session.username});

    	}else{
    		res.render('profile', { title: 'crowdhub | Profile Page', header: 'Profile Page does not exist', });

    	}
    });
     

    
};
exports.profile_post_handler = function(req, res) {

};