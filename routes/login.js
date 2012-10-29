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
    password = req.body.username;

    user.findOne({user_name: username}, function(err, usernames) {
        if (usernames) {
            console.log('Username and exists!...');

        }else{
            console.log('Cannot log in, username does not exist.');
            failure1 = 'Username does not exist.'
            failure2 = null;
            res.redirect('/login/failure');
        }
    });


    req.session.username = username;
    res.redirect('/login');

};

exports.loginSuccess = function(req, res){
    res.render('loginSuccess', {title: 'NinjaMine | Successful Login'});
};
exports.loginFailure = function(req, res){
    res.render('loginFailure', {title: 'NinjaMine | Failed Login', failure1:failure1, failure2:failure2});
};
