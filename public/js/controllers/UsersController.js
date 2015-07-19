/**
 * Created by Yonatan.Vainer on 7/9/2015.
 */
angular.module('UsersController', [])

    .controller('UsersController', ['UsersManagerService','AuthService','FileUploader', function(UsersManagerService,AuthService,FileUploader){

        var vm = this;
        vm.name = "";
        vm.username = "";
        vm.password = "";
        vm.role = "";
        vm.photo = "";

        vm.users = UsersManagerService.users;

        vm.uploader = new FileUploader();
        vm.uploader.url = "http://localhost:3000/api/images";

        vm.uploader.onAfterAddingFile = function(item){

            vm.photo = item.file.name;

        };

        vm.submit = function(){

            UsersManagerService.create(
                {
                    "name": vm.name,
                    "username": vm.username,
                    "password": vm.password,
                    "role": vm.role,
                    "photo": vm.photo
                }
            );
        };

        vm.getUsers = function(role){
            UsersManagerService.get(role);
        };

        vm.promote = function(user){
            UsersManagerService.promote(user)
        }

        vm.demote = function(user){
            UsersManagerService.demote(user)
        }
    }]);

