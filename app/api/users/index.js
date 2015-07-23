var usersCtrl       = require('./users');
var protectCtrl     = require('../../middlewares/protect');

module.exports = function(app){

    app.get('/api/users/:role', protectCtrl.protect, usersCtrl.getUsers);
    app.post('/api/users', protectCtrl.protect, usersCtrl.addUser);
    app.put('/api/users/promote', protectCtrl.protect, usersCtrl.promoteUser);
    app.put('/api/users/demote', protectCtrl.protect, usersCtrl.demoteUser);
};
