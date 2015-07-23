var loginCtrl = require('./login');

module.exports = function(app){

    app.post('/login', loginCtrl.login);

};
