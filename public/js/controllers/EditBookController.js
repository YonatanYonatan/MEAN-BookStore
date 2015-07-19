/**
 * Created by Yonatan.Vainer on 7/12/2015.
 */
/**
 * Created by Yonatan.Vainer on 7/9/2015.
 */
angular.module('EditBookController', [])

    .controller('EditBookController', ['BooksManagerService', function(BooksManagerService){

        var vm = this;

        vm.title = "";
        vm.author = "";
        vm.year = "";
        vm.cover = "";
        vm.link = "";

        vm.popover = {
            templateUrl: 'views/editTemplate.html',
            title: 'Book Editor'
        };

        vm.submit = function(bookId){

            BooksManagerService.edit(
                {
                    "title": vm.title,
                    "author": vm.author,
                    "year": vm.year,
                    "link": vm.link,
                    "cover": vm.cover,
                    "id": bookId
                }
            );
        }

    }]);





