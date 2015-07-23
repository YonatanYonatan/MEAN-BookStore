var booksCtrl       = require('./books');
var protectCtrl     = require('../../middlewares/protect');

module.exports = function(app){

    app.get('/api/books', protectCtrl.protect, booksCtrl.getBooks);
    app.post('/api/books', protectCtrl.protect, booksCtrl.addBook);
    app.put('/api/books', protectCtrl.protect, booksCtrl.editBook);
    app.delete('/api/books/:id', protectCtrl.protect, booksCtrl.deleteBook);

};

