var mongoose = require( 'mongoose' );
var user     = mongoose.model( 'user' );
var d;
exports.results = function(req, res) {
	query = req.query.query.toLowerCase();
	console.log(query);

	user.findOne({user_name: query}, function(err, exists){
		if(exists){
			if(query == ''){
				temp = undefined;
				res.render('search', {title: 'NinjaMine | Search Results', results_header: 'Invalid Search: Nothing'});

			}else{
				temp = "defined";
				d = query;
				res.render('search', {title: 'NinjaMine | Search Results', results_header: 'Users Results: ' + d, search_result: d  });
			}
			
		}else{
			temp = undefined;
			console.log('username not found in query')
			d = query;
			res.render('search', {title: 'NinjaMine | Search Results', results_header: 'Users Results: ' + d});
 		}
	}); 

	
	
};
exports.results_post_handler = function(req, res) {

}