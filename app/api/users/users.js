var User            = require('../../models/user');

module.exports = {
    addUser: addUser,
    getUsers: getUsers,
    promoteUser: promoteUser,
    demoteUser: demoteUser
};

function addUser(req, res){

    console.log('insert user');

    if (req.user.role != 'admin'){

        return res.status(403).send({
            success: false,
            message: "Permission denied"
        });

    }

    User.findOne({username: req.body.username, password: req.body.password}, function(err,user){

        if (err){
            return res.json({
                success: false,
                message: "Error occurred: " + err
            });
        }

        else {
            if (user){
                res.json({
                    success: false,
                    message: "User already exists!"
                });
            }

            else {

                var userModel = new User(
                    {
                        name: req.body.name,
                        username: req.body.username,
                        password: req.body.password,
                        role: req.body.role,
                        photo: req.body.photo
                    }
                );

                userModel.save(function(err, user){
                    if(err){
                        return res.json({
                            success: false,
                            message: "Error occurred: " + err
                        })
                    }

                    res.status(200).send({
                        success: true,
                        message: "User added"
                    });
                })
            }
        }
    });
}

function promoteUser(req, res){

    if (req.user.role != 'admin'){

        return res.status(403).send({
            success: false,
            message: "Permission denied"
        });

    }

    console.log('promote user');

    User.findById(req.body._id, function(err, user){

        if(err){
            return res.json({
                success: false,
                message: "Error occurred: " + err
            });
        }

        if(user.role == 'reader'){
            req.body.role = 'publisher';
        }
        else if(user.role == 'publisher'){
            req.body.role = 'admin';
        }

        User.findByIdAndUpdate(req.body._id, req.body, function(err, user){
            if(err){
                return res.json({
                    success: false,
                    message: "Error occurred: " + err
                });
            }

            res.status(200).send({
                success: true,
                message: "User promoted"
            });
        })
    });

}

function demoteUser(req, res){

    if (req.user.role != 'admin'){

        return res.status(403).send({
            success: false,
            message: "Permission denied"
        });

    }

    console.log('demote user');

    User.findById(req.body._id, function(err, user){

        if(err){
            return res.json({
                success: false,
                message: "Error occurred: " + err
            });
        }

        if(user.role == 'admin'){
            req.body.role = 'publisher';
        }
        else if(user.role == 'publisher'){
            req.body.role = 'reader';
        }

        User.findByIdAndUpdate(req.body._id, req.body, function(err, user){
            if(err){
                return res.json({
                    success: false,
                    message: "Error occurred: " + err
                });
            }
            res.status(200).send({
                success: true,
                message: "User demoted"
            });
        })
    });

}

function getUsers(req, res){

    if (req.user.role != 'admin'){

        return res.status(403).send({
            success: false,
            message: "Permission denied"
        });

    }

    console.log('get users');

    User.find({role: req.params.role},function(err, users){

        if(err){
            return res.json({
                success: false,
                message: "Error occurred: " + err
            });
        }

        res.status(200).send({
            success: true,
            message: users
        });
    });

}
