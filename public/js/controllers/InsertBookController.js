/**
 * Created by Yonatan.Vainer on 7/9/2015.
 */
angular.module('InsertBookController', [])

    .controller('InsertBookController', ['AuthService','BooksManagerService','FileUploader','$state', function(AuthService,BooksManagerService,FileUploader,$state){

        var vm = this;
        vm.title = "";
        vm.author = "";
        vm.year = "";
        vm.link = "";
        vm.cover = "";

        vm.uploader = new FileUploader();
        vm.uploader.url = "http://localhost:3000/api/images";

        vm.uploader.onAfterAddingFile = function(item){

            vm.cover = item.file.name;

        };

        vm.submit = function(){

            BooksManagerService.create(
                {
                    "title": vm.title,
                    "author": vm.author,
                    "year": vm.year,
                    "link": vm.link,
                    "cover": vm.cover
                }
            );

            $state.go('home');

        };
    }]);

