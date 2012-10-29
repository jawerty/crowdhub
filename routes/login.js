/**DEPENDENCIES**/
var mongoose = require( 'mongoose' );

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
    

    req.session.username = username;
    // redirect the user to homepage
    res.redirect('/login');

};
