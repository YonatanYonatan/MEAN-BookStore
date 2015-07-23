angular.module('UsersManagerService', [])

    .factory('UsersManagerService', ['$http','$localStorage', function ($http,$localStorage) {

        var users = {

            list: []

        };

        var obj = {};

        obj.users = users;

        obj.create = function(userData){

            return $http.post('/api/users', userData);
        };

        obj.get = function(role){

            return $http.get('/api/users/'+role)
                .then(function(usersData){
                    users.list = usersData.data.message;
                })
        };

        obj.promote = function(user){

            return $http.put('/api/users/promote', user)
                .then(function(d){
                    $localStorage.$reset();
                    obj.get();
                });
        };

        obj.demote = function(user){

            return $http.put('/api/users/demote', user)
                .then(function(d){
                    $localStorage.$reset();
                    obj.get();
                });
        }

        return obj;

    }]);
