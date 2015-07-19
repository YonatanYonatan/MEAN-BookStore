var loginCtrl = require('./login');

module.exports = function(app,User,Book,fs){

    app.post('/login', loginCtrl.login);

};
