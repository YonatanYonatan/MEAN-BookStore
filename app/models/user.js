/**
 * Created by Yonatan.Vainer on 7/12/2015.
 */
var mongoose        = require('mongoose');

// out user model definition

module.exports = mongoose.model('User',
    {
        name: {type: String, default: ""},
        username: {type: String, default: ""},
        password: {type: String, default: ""},
        role :  {type: String, default: ""},
        photo: {type: String, default: ""}
    }, 'users'
);