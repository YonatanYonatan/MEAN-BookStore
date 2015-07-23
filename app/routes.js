/**
 * Created by Yonatan.Vainer on 7/9/2015.
 */
var Book            = require('./models/book');
var User            = require('./models/user');
var fs              = require('fs-extra');

module.exports = function(app){

    // ===  server routes

    // image routes
    require('./api/images')(app);

    // login routes
    require('./api/login')(app);

    // books routes
    require('./api/books')(app);

    // users routes
    require('./api/users')(app);

    // === frontend routes

    // route to handle all angular requests

    app.get('*', function(req, res) {
        res.sendfile("public/index.html");
    });

};