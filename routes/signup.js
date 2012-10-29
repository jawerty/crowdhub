var mongoose = require( 'mongoose' );
var user     = mongoose.model( 'user' );

var failure1, failure2;

exports.form = function(req, res) {
	res.render('signup', {title: 'NinjaMine | Sign Up'});
};
exports.form_post_handler = function(req, res) {
	firstName = req.body.textFirstName;
	lastName = req.body.textLastName;
	email = req.body.email;
    password1 = req.body.password1;
    password2 = req.body.password2; 
    newUsername = req.body.username;
    bio = req.body.bio;
    if (password1 != password2) {
		failure1 = 'Passwords do not match';
		failure2 = null;
		res.redirect('/signup/failure');
		
    }else{
        user.findOne({user_name: newUsername}, function(err, usernames) {
            if (usernames) { 
                console.log("user exists");
                failure1 = 'Username already exists';
                failure2 = null;
                res.redirect('/signup/failure');

            } else { 
                console.log("user doesn't exist"); 
                var newUser = new user({ 
                                first: firstName,
                                last: lastName,
                                email: email,
                                user_name: newUsername,
                                password1: password1,
                                password2: password2,
                                bio: bio    
                            });
                newUser.save();

                console.log(newUser + "has been initiated.");
        
                res.redirect('/signup/success');
            }
        });


        
            
    	


    }

};
exports.signupSuccess = function(req, res){
	res.render('signupSuccess', {title: 'NinjaMine | Successful Signup'});
};
exports.signupFailure = function(req, res){
	res.render('signupFailure', {title: 'NinjaMine | Failed Signup', failure1:failure1, failure2:failure2});
};