/**
 * Created by Yonatan.Vainer on 7/10/2015.
 */
angular.module('BooksManagerService', [])

    .factory('BooksManagerService', ['$http','$localStorage', function($http,$localStorage) {

        var books = {
            list: []
        };

        var obj = {};

        $http.defaults.headers.common['x-access-token'] = $localStorage.token;

        obj.books = books;

        obj.get = function(){
            return $http.get('/api/books')
                .then(function(res){
                    var obj = res.data;
                    books.list = obj.message;
                });
        };

        obj.create = function(bookData) {
            return $http.post('/api/books', bookData)
                .then(function(d){
                    obj.get();
                });
        };

        obj.delete = function(bookId) {
            return $http.delete('/api/books/'+bookId)
                .then(function(d){
                    obj.get();
                });
        };

        obj.edit = function(bookData) {
            return $http.put('/api/books', bookData)
                .then(function(d){
                    obj.get();
                });
        };

        return obj;
    }]);