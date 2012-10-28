/**Mongoose**/
var mongoose = require('mongoose');
var db_url = process.env.MONGOHQ_URL || "http://localhost:27017/ninjamineDB",
	db = mongoose.connect(db_url);


var userSchema = new mongoose.Schema({
    id: Number,
    first: String,
    last: String,
    email: String,
    user_name: String,
    password1: String,
    password2: String,
    bio: String
})
var user = db.model('User', userSchema);

/*************/


var ID = 0;
var failure1;
var failure2;
exports.form = function(req, res) {
	res.render('signup', {title: 'NinjaMine | Sign Up'});
};
exports.form_post_handler = function(req, res) {
	firstName = req.body.textFirstName;
	lastName = req.body.textLastName;
	email = req.body.email;
    password1 = req.body.password1;
    password2 = req.body.password2; 
    username = req.body.username;
    if (password1 != password2) {
		failure1 = 'Passwords do not match';
		failure2 = null;
		res.redirect('/signup/failure');
		
    }else{
    	var newUser = new user({id:ID++, 
    							first: String,
    							last: String,
    							email: String,
    							user_name: String,
    							password1: String,
    							password2: String,
    							bio: String	
    						});

    	console.log(newUser);
		res.redirect('/signup/success');

    }

};
exports.signupSuccess = function(req, res){
	res.render('signupSuccess', {title: 'NinjaMine | Successful Signup'});
};
exports.signupFailure = function(req, res){
	res.render('signupFailure', {title: 'NinjaMine | Failed Signup', failure1:failure1, failure2:failure2});
};