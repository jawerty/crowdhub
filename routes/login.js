/**DEPENDENCIES**/
var mongoose = require( 'mongoose' );
var user     = mongoose.model( 'user' );

/*************/
var failure1, failure2;

var stories = {
    Jared:{author:'Jared Wright (BDFL)', story:"Hello World!", },
    Jawerty:{author:'Jawerty', story:"I went to the park and saw a duck"},
    crowdhuber:{author:'crowdhuber', story:"I didn't chose the crowdhub life, crowdhub chose me."}
};
exports.login = function(req, res) {
	res.render('login', {title: 'crowdhub | Login'});
}
exports.login_post_handler = function(req, res) {
	
    username1 = req.body.username;
    password = req.body.password;

    user.findOne({user_name: username1}, function(err, usernames) {
        if (usernames) {
            console.log('Username and exists!...');

            user.findOne({user_name: username1, password1: password}, function(err, passwords) {
                if (passwords){
                    console.log('username and password match for username,' + username1); 

                    req.session.username = username1;
                    username = req.session.username;
                    res.redirect('/login/success')
                }else{
                    console.log('username and password do not match for username,' + username);
                    failure1 = 'Username and password do not match.'
                    failure2 = null;
                    res.redirect('/login/failure');
                }
            });
            
        }else{
            console.log('Cannot log in, username does not exist.');
            failure1 = 'Username does not exist.';
            failure2 = null;
            res.redirect('/login/failure');
        }

    });



};

exports.loginSuccess = function(req, res){
    res.render('loginSuccess', {title: 'crowdhub | Successful Login'});
};
exports.loginFailure = function(req, res){
    res.render('loginFailure', {title: 'crowdhub | Failed Login', failure1:failure1, failure2:failure2});
};
