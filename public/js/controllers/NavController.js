angular.module('NavController', [])

    .controller('NavController', ['$localStorage','$state', function($localStorage,$state){

        var vm = this;

        vm.name = $localStorage.name;
        vm.role = $localStorage.role;

        vm.logout = function(){

            $localStorage.$reset();
        }

    }]);
