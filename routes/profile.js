var mongoose = require( 'mongoose' );
var user     = mongoose.model( 'user' );
var error;

exports.profile = function(req, res, next) {
<<<<<<< HEAD
    user.findOne({user_name: req.params.id}, function(err, profile) {
    	if(profile){
    		res.render('profile', { title: 'NinjaMine | ' + req.params.id + '\'s Profile Page', header: req.params.id + ' Profile Page', username: req.session.username});

    	}else{
    		res.render('profile', { title: 'NinjaMine | Profile Page', header: 'Profile Page does not exist', });

    	}
    });
     
=======
    /*
    if (req.params.id == //username in database){
        //display page with contents according to user's document.
    }
    */
    res.render('profile', { title: 'NinjaMine | Profile page - in production'});
    
>>>>>>> 5fbb714f996fa45acf067c85b664c56de7dc4034
};
exports.profile_post_handler = function(req, res) {

};