var User            = require('../../models/user');

module.exports = {
    login: login
};

function login(req, res) {

    console.log('login ' + req.body.username + ' ' + req.body.password);

    User.find({'username': req.body.username, 'password': req.body.password}, function(err, users){
        if(err){
            res.send(err);
        }

        else{

            if(users.length == 0){

                res.send('Forbidden');
            }

            else {

                var user = users[0];

                res.send(
                    {
                        username: user.username,
                        name: user.name,
                        role: user.role
                    }
                )

            }

        }
    });

}
