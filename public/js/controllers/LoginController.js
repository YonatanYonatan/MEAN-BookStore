/**
 * Created by Yonatan.Vainer on 7/12/2015.
 */
angular.module('LoginController', [])

    .controller('LoginController', ['AuthService','$state','$localStorage', function(AuthService,$state,$localStorage){

        var vm = this;

        vm.username = "";
        vm.password = "";

        vm.loggedIn = false;

        vm.submit = function(){

            vm.error = false;
            vm.wrong = false;

            var data = {username: vm.username, password: vm.password};

            AuthService.login(data)
                .then(function(res){

                    var obj = res.data;

                    if(obj.success == false) {

                        if(obj.message == "Incorrect email/password") {
                            vm.wrong = true;
                        }

                        else {
                            vm.error = true;
                        }

                    }

                    else {
                        $localStorage.token = obj.token;
                        $localStorage.name = obj.message.name;
                        $localStorage.role = obj.message.role;
                        $state.go('home');
                    }
                });

            }

    }]);