/*
 * GET users listing.
 */

exports.default = function(req, res){
  res.render('profile', {title: 'crowdhub | No Profile', header: 'You have to login to view your profile.'})
};