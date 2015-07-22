var Book            = require('../../models/book');

module.exports = {
    getBooks: getBooks,
    addBook: addBook,
    editBook: editBook,
    deleteBook: deleteBook,
    searchBook: searchBook
};

function getBooks(req, res){

    console.log('get books');

    Book.find({},function(err, books){

        if(err){
            res.send(err);
        }

        res.json(books);
    });
}

function searchBook(req, res){

    console.log('search book');

    Book.find({})
}

function addBook(req, res){

    console.log('insert book');

    var book = new Book(
        {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year,
            link: req.body.link,
            cover: req.body.cover
        }
    );
    book.save(function(err, book){
        if(err){
            res.send(err);
        }
        res.sendStatus(200);
    })
}

function editBook(req, res){

    console.log('edit book');

    Book.findById( req.body.id, function(err, book){

        if (req.body.title == ""){
            req.body.title = book.title;
        }
        if (req.body.author == "") {
            req.body.author = book.author;
        }
        if (req.body.year == "") {
            req.body.year = book.year;
        }
        if (req.body.cover == "") {
            req.body.cover = book.cover;
        }
        if (req.body.link == "") {
            req.body.link = book.link;
        }

        if (req.body.link != "") {
            req.body.cover = "";
        }

        if (req.body.cover != "") {
            req.body.link = "";
        }

        Book.findByIdAndUpdate( req.body.id, req.body ,function(err, book){

            if(err){
                console.log(err);
                res.send(err);
            }
            res.sendStatus(200);
        });
    });

}

function deleteBook(req, res){


    console.log('delete book');

    Book.findByIdAndRemove(req.params.id, function(err, book){
        if(err){
            console.log(err);
            res.send(err);
        }
        res.sendStatus(200);
    });
}
