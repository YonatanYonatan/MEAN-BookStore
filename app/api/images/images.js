var fs              = require('fs-extra');

module.exports = {

    addImage: addImage,
    getImage: getImage

};

function addImage(req, res) {
    console.log('got image to upload');

    var fstream;

    req.busboy.on('file', function (fieldname, file, filename) {

        fstream = fs.createWriteStream('./public/images/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            console.log('upload finished for ' + filename);
        });

    });

    req.busboy.on('finish', function () {
        res.sendStatus(200);
    });

}

function getImage(req, res){

    res.sendfile('./public/images/'+req.params.name);
}