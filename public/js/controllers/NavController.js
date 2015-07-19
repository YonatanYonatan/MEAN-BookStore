angular.module('NavController', [])

    .controller('NavController', ['AuthService', function(AuthService){

        var vm = this;

        vm.name = AuthService.getName();

        vm.role = AuthService.getRole();

    }]);
