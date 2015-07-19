var imageCtrl = require('./images');

module.exports = function(app,User,Book,fs){

    app.post('/api/images', imageCtrl.addImage);
    app.get('/api/images/:name', imageCtrl.getImage);
}
