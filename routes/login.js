/**DEPENDENCIES**/
var mongoose = require( 'mongoose' );
var user     = mongoose.model( 'user' );

/*************/
var failure1, failure2;

var quotes = {
    Jared:{author:'Jared Wright (BDFL)', quote:"Hello World!", },
    Jawerty:{author:'Jawerty', quote:"Ro Ro Fight the Power..."},
    Ninjaminder:{author:'Ninjaminder', quote:"I didn't chose the NinjaMine life, NinjaMine chose me."}
};
exports.login = function(req, res) {
	res.render('login', {title: 'NinjaMine | Login'});
}
exports.login_post_handler = function(req, res) {
	
    username = req.body.username;
    password = req.body.password;

    user.findOne({user_name: username}, function(err, usernames) {
        if (usernames) {
            console.log('Username and exists!...');

            user.findOne({user_name: username, password1: password}, function(err, passwords) {
                if (passwords){
                    console.log('username and password match for username,' + username); 

                    req.session.username = username;

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
    res.render('loginSuccess', {title: 'NinjaMine | Successful Login'});
};
exports.loginFailure = function(req, res){
    res.render('loginFailure', {title: 'NinjaMine | Failed Login', failure1:failure1, failure2:failure2});
};
