var User            = require('../../models/user');
var jwt             = require('jsonwebtoken');

module.exports = {
    login: login
};

function login(req, res) {

    console.log('login ' + req.body.username + ' ' + req.body.password);

    User.findOne({username: req.body.username, password: req.body.password}, function(err, user){

        if(err){
            res.json({
                success: false,
                message: "Error occurred: "+ err
            });
        }

        else{

            if(user){

                var token = jwt.sign(user, 'jsonwebtokenisoverrated', {
                    expiresInMinutes: 1440
                });

                res.json({
                    success: true,
                    message: {
                        name: user.name,
                        role: user.role
                    },
                    token: token
                });
            }

            else {

                res.json({
                    success: false,
                    message: "Incorrect email/password"
                })

            }

        }
    });

}
