var User            = require('../../models/user');

module.exports = {
    addUser: addUser,
    getUsers: getUsers,
    promoteUser: promoteUser,
    demoteUser: demoteUser
};

function addUser(req, res){

    console.log('insert user');

    var user = new User(
        {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
            photo: req.body.photo
        }
    );
    user.save(function(err, user){
        if(err){
            res.send(err);
        }
        res.sendStatus(200);
    })
}

function promoteUser(req, res){

    console.log('promote user');

    User.findById(req.body._id, function(err, user){

        if(err){
            res.send(err);
        }

        if(user.role == 'reader'){
            req.body.role = 'publisher';
        }
        else if(user.role == 'publisher'){
            req.body.role = 'admin';
        }

        User.findByIdAndUpdate(req.body._id, req.body, function(err, user){
            if(err){
                console.log(error);
                res.send(err);
            }
            res.sendStatus(200);
        })
    });

}

function demoteUser(req, res){

    console.log('demote user');

    User.findById(req.body._id, function(err, user){

        if(err){
            res.send(err);
        }

        if(user.role == 'admin'){
            req.body.role = 'publisher';
        }
        else if(user.role == 'publisher'){
            req.body.role = 'reader';
        }

        User.findByIdAndUpdate(req.body._id, req.body, function(err, user){
            if(err){
                console.log(error);
                res.send(err);
            }
            res.sendStatus(200);
        })
    });

}

function getUsers(req, res){

    console.log('get users');

    User.find({role: req.params.role},function(err, users){

        if(err){
            res.send(err);
        }

        res.json(users);
    });

}
