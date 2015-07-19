/**
 * Created by Yonatan.Vainer on 7/12/2015.
 */
angular.module('LoginController', [])

    .controller('LoginController', ['AuthService','$state', function(AuthService,$state){

        var vm = this;

        vm.username = "";
        vm.password = "";

        vm.loggedIn = false;

        vm.submit = function(){

            vm.error = false;

            var data = {username: vm.username, password: vm.password};

            AuthService.login(data)
                .then( function(){

                    if(AuthService.getUsername() == '-1') {
                        vm.error = true;
                    }

                    else {
                        $state.go('home');
                    }
                });

            }

    }]);