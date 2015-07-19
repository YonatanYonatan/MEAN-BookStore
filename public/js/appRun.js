/**
 * Created by Yonatan.Vainer on 7/14/2015.
 */
angular.module('appRun', [])

    .run(function($rootScope, $state, AuthService,$window) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

            var requireLogin = toState.data.requireLogin;

            if (requireLogin){

                if (AuthService.getUsername() == '-1') {
                    event.preventDefault();
                }

            }

        })
    });