var mongoose = require('mongoose')
var Schema = mongoose.Schema
    ,ObjectId = Schema.ObjectId;

var db_url = process.env.MONGOHQ_URL || "http://localhost:27017/ninjamineDB", 
    db = mongoose.connect(db_url);


var userSchema = new Schema({
    id: ObjectId,
    first: String,
    last: String,
    email: String,
    user_name: String,
    password1: String,
    password2: String,
    bio: String
})
var user = db.model('user', userSchema);