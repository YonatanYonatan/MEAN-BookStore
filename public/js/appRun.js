/**
 * Created by Yonatan.Vainer on 7/14/2015.
 */
angular.module('appRun', [])

    .run(function($rootScope, $state, $localStorage) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

            var requireLogin = toState.data.requireLogin;

            if (requireLogin){

                var roles = toState.data.permissions.role;

                if ($localStorage.token === undefined) {

                    event.preventDefault();
                    $state.go('login');
                }

                else {

                    var role = $localStorage.role;

                    if (roles.indexOf(role) === -1) {

                        event.preventDefault();
                        $state.go('login');
                    }
                }
            }
        })
    });