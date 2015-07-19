angular.module('UsersManagerService', [])

    .factory('UsersManagerService', ['$http', function ($http) {

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
                    users.list = usersData.data;
                })
        };

        obj.promote = function(user){

            return $http.put('/api/users/promote', user);
        };

        obj.demote = function(user){

            return $http.put('/api/users/demote', user);
        }

        return obj;

    }]);
