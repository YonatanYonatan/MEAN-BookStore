/**
 * Created by Yonatan.Vainer on 7/10/2015.
 */
angular.module('AuthService', [])

    .factory('AuthService',  AuthService);

    AuthService.$inject = ['$http'];

    function AuthService($http) {

        var service = {

            login: login

        };

        return service;

        function login(data) {

            return $http.post('/login',data)

        }

    };