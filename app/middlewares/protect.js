var jwt             = require('jsonwebtoken');

module.exports = {

    protect: protect

};


function protect(req, res, next){

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {

        jwt.verify(token,'jsonwebtokenisoverrated', function(err, decoded){

            if(err){
                res.json({
                    success: false,
                    message: "Failed to authenticate token"
                });
            }

            else{
                req.user = decoded;
                next();
            }
        });
    }

    else {
        res.status(403).send({
            success: false,
            message: 'No token provided'
        });
    }
}