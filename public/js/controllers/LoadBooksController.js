/**
 * Created by Yonatan.Vainer on 7/9/2015.
 */
angular.module('LoadBooksController', [])

    .controller('LoadBooksController', ['BooksManagerService', function(BooksManagerService){

        var vm = this;

        BooksManagerService.get();

        vm.books = BooksManagerService.books;

    }]);
