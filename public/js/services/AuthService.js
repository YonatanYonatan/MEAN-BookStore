/**
 * Created by Yonatan.Vainer on 7/10/2015.
 */
angular.module('AuthService', [])

    .factory('AuthService',  AuthService);

    AuthService.$inject = ['$http','$cookies','$window'];

    function AuthService($http,$cookies,$window) {

        var service = {

            login: login,
            getRole: getRole,
            getName: getName,
            getUsername: getUsername

        };

        return service;

        function login(user) {

            return $http.post('/login',user)
                .then(function(res){

                    if(res.data != 'Forbidden'){
                        $cookies.put('name', res.data.name);
                        $cookies.put('username',res.data.username);
                        $cookies.put('role',res.data.role);

                    }

                    else {
                        $cookies.put('name', '-1');
                        $cookies.put('username', '-1');
                        $cookies.put('role', '-1');
                    }

                });

        }

        function getRole() {

            return $cookies.get('role');

        }

        function getName() {

            return $cookies.get('name');
        }

        function getUsername() {

            return $cookies.get('username');
        }

    };