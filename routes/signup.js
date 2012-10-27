/**usersTBL.insert({
  id: 0,
  first: "Jared",
  last: "Wright",
  username: "Admin",
  password: password,
  email: "jawerty210@gmail.com",
  bio: "I am the BDFL."
})**/
var failure1;
var failure2;
exports.form = function(req, res) {
	res.render('signup', {title: 'NinjaMine | Sign Up'});
};
exports.form_post_handler = function(req, res) {
    password1 = req.body.password1;
    password2 = req.body.password2; 
    username = req.body.username;
    if (password1 != password2) {
		failure1 = 'Passwords do not match';
		failure2 = null;
		res.redirect('/signup/failure');
	
    }else{
		if(usersTBL.find({ userName: username })){
			res.redirect('/signup/failure');
		}else{
			res.redirect('/signup/success');
		}
    }

};
exports.signupSuccess = function(req, res){
	res.render('signupSuccess', {title: 'NinjaMine | Successful Signup'});
};
exports.signupFailure = function(req, res){
	res.render('signupFailure', {title: 'NinjaMine | Failed Signup', failure1:failure1, failure2:failure2});
};