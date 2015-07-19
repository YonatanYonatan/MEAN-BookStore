/**
 * Created by Yonatan.Vainer on 7/9/2015.
 */
angular.module('DeleteBookController', [])

    .controller('DeleteBookController', ['BooksManagerService', function(BooksManagerService){

        var vm = this;

        vm.submit = function(bookId) {

            BooksManagerService.delete(bookId);
        };


    }]);