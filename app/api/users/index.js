var usersCtrl = require('./users');

module.exports = function(app){

    app.get('/api/users/:role', usersCtrl.getUsers);
    app.post('/api/users', usersCtrl.addUser);
    app.put('/api/users/promote', usersCtrl.promoteUser);
    app.put('/api/users/demote', usersCtrl.demoteUser);
};
