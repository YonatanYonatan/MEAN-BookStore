var booksCtrl = require('./books');

module.exports = function(app,User,Book,fs){

    app.get('/api/books', booksCtrl.getBooks);
    app.post('/api/books', booksCtrl.addBook);
    app.put('/api/books', booksCtrl.editBook);
    app.delete('/api/books/:id', booksCtrl.deleteBook);

};