/**
 * Created by VIshu on 12/28/2015.
 */
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String, //hash created from password
    created_at: {type: Date, default: Date.now}
});

var quoteSchema = new mongoose.Schema({
    created_at: {type: Date, default: Date.now},
    text: String
});

//declaring models which has user userschema
mongoose.model('Post', quoteSchema);
mongoose.model('User', userSchema);

