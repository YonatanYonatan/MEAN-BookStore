angular.module('AdminController', [])

    .controller('AdminController', ['$state','AuthService' ,function($state,AuthService){

        var vm = this;

        vm.users = function(){

            $state.go('admin.users');

        };

        vm.books = function(){

            $state.go('admin.books');
        };
    }]);