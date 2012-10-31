/**DEPENDENCIES**/
var mongoose = require( 'mongoose' );
var regex_email = require('../regex_email');
var user     = mongoose.model( 'user' );
/****************/
var failure1, failure2;
var eight_char = "12345678";
var twenty_six_char = "12345678912345678912345678";
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
    if(password1.length < eight_char.length || password1.length > twenty_six_char.length){

        console.log('password length is not valid');
        failure1 = 'Password length must be from 8 to 26 characters';
        failure2 = null;
        res.redirect('signup/failure');

    }else{
        console.log('password length is fine.');

        if (password1 != password2) {
        failure1 = 'Passwords do not match';
        failure2 = null;
        res.redirect('/signup/failure');
        

        }else{
            if(regex_email.isRFC822ValidEmail(email)){
                console.log('valid email'); 
                if (firstName == "" || lastName == "" || email == "" || firstName == "" || password1 == "" || password2 == "" || newUsername == "" || bio == ""){
                    console.log('Empty field');
                    failure1 = 'You left a field empty.';
                    failure2 = null;
                    res.redirect('/signup/failure')
                }else{
                    user.findOne({user_name: newUsername}, function(err, usernames) {
                        if (usernames) { 
                            console.log("user exists");
                            failure1 = 'Username already exists';
                            failure2 = null;
                            res.redirect('/signup/failure');

                        } else { 
                            console.log("user doesn't exist :)");
                            user.findOne({email: email}, function(err, emails) {
                                if (emails){
                                    console.log('email exists');
                                    failure1 = 'Email already exists';
                                    failure2 = null;
                                    res.redirect('/signup/failure');
                                }else{
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
                    });
                }
            }else{
               console.log('invalid email');
               failure1 = "Invalid email account.";
               failure2 = null;
               red.redirect('/signup/failure');
            }

        
        }
    


    }

};
exports.signupSuccess = function(req, res){
	res.render('signupSuccess', {title: 'NinjaMine | Successful Signup'});
};
exports.signupFailure = function(req, res){
	res.render('signupFailure', {title: 'NinjaMine | Failed Signup', failure1:failure1, failure2:failure2});
};