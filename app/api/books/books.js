var Book            = require('../../models/book');

module.exports = {
    getBooks: getBooks,
    addBook: addBook,
    editBook: editBook,
    deleteBook: deleteBook,
};

function getBooks(req, res){

    console.log('get books');

    Book.find({},function(err, books){

        if(err){
            res.json({
                success: false,
                message: "Error occurred: " + err
            });
        }

        else {
            res.json({
                success: true,
                message: books
            });
        }
    });
}

function addBook(req, res){

    console.log('insert book');

    if (req.user.role == 'reader'){

        return res.status(403).send({
            success: false,
            message: "Permission denied"
        });

    }

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
            res.json({
                success: false,
                message: "Error occured: " + err
            });
        }
        res.status(200).send({
            success: true,
            message: "New book inserted"
        });
    })
}

function editBook(req, res){

    console.log('edit book');

    if (req.user.role == 'reader'){

        return res.status(403).send({
            success: false,
            message: "Permission denied"
        });

    }

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
                res.json({
                    success: false,
                    message: "Error occured: " + err
                });
            }
            res.status(200).send({
                success: true,
                message: "Book edited"
            });
        });
    });

}

function deleteBook(req, res){

    console.log('delete book');

    if (req.user.role == 'reader'){

        return res.status(403).send({
            success: false,
            message: "Permission denied"
        });

    }

    Book.findByIdAndRemove(req.params.id, function(err, book){
        if(err){
            res.json({
                success: false,
                message: "Error occurred: " + err
            });
        }
        res.status(200).send({
            success: true,
            message: "Book deleted"
        });
    });
}
