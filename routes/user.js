/*
 * GET users listing.
 */

exports.default = function(req, res){
  res.render('profile', {title: 'Ninjamine | No Profile', header: 'You have to login to view your profile.'})
};