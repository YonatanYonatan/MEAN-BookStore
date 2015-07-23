/**
 * Created by Yonatan.Vainer on 7/9/2015.
 */
/*
angular.module('appRoutes', [])
    .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

        $routeProvider
            .when("/", {
                templateUrl: "views/intro.html",
                controller: "LoadBooksController",
                controllerAs: "loadCtrl"
            })
            .when("/about", {
                templateUrl: "views/about.html", controller: ""
            })
            .when("/add_book", {
                templateUrl: "views/add.html",
                controller: "InsertBookController",
                controllerAs: "insertCtrl"
            })
            .when("/add_user", {
                templateUrl: "views/user.html",
                controller: "InsertUserController",
                controllerAs: "insertCtrl"
            })
            .otherwise({
                templateUrl: "views/intro.html",
                controller: "LoadBooksController",
                controllerAs: "loadCtrl"
            })

        $locationProvider.html5Mode(true);
}]);
*/
angular.module('appRoutes', [])
    .config(['$stateProvider','$urlRouterProvider','$locationProvider', function($stateProvider,$urlRouterProvider,$locationProvider){

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('login',
            {
                url: '/',

                views: {
                    'nav' :
                    {

                    },
                    'main':
                    {
                        templateUrl: 'views/login.html',
                        controller: 'LoginController',
                        controllerAs: 'loginCtrl'
                    }
                },

                data:
                {
                    requireLogin: false,
                    permissions:
                    {
                        role: []
                    }
                }

            })
            .state('home',
            {
                url: '/home',

                views: {
                    'nav' :
                    {
                        templateUrl: 'views/nav.html',
                        controller: 'NavController',
                        controllerAs: 'navCtrl'
                    },
                    'main':
                    {
                        templateUrl: 'views/home.html',
                        controller: "LoadBooksController",
                        controllerAs: "loadCtrl"
                    }
                },

                data:
                {
                    requireLogin: true,
                    permissions:
                    {
                        role: ["reader","publisher","admin"]
                    }
                }

            })
            .state('addBook',
            {
                url: '/add_book',

                views:
                {
                    'nav':
                    {
                        templateUrl: 'views/nav.html',
                        controller: 'NavController',
                        controllerAs: 'navCtrl'

                    },
                    'main':
                    {
                        templateUrl: 'views/add.html',
                        controller: "InsertBookController",
                        controllerAs: "insertCtrl"
                    }
                },

                data:
                {
                    requireLogin: true,
                    permissions:
                    {
                        role: ["publisher","admin"]
                    }
                }
            })
            .state('admin',
            {
                url: '/admin',

                views:
                {
                    'nav':
                    {
                        templateUrl: 'views/nav.html',
                        controller: 'NavController',
                        controllerAs: 'navCtrl'

                    },
                    'main':
                    {
                        templateUrl: "views/admin.html",
                        controller: "AdminController",
                        controllerAs: "adminCtrl"
                    }
                },
                data:
                {
                    requireLogin: true,
                    permissions:
                    {
                        role: ["admin"]
                    }
                }
            })
            .state('admin.users',
            {
                views:
                {
                    '':
                    {
                        templateUrl: "views/admin.users.html",
                        controller: 'UsersController',
                        controllerAs: 'usersCtrl'
                    }
                },

                data:
                {
                    requireLogin: true,
                    permissions:
                    {
                        role: ["admin"]
                    }
                }
            })
            .state('admin.books',
            {
                views:
                {
                    '':
                    {
                        templateUrl: "views/admin.books.html"
                    }
                },

                data:
                {
                    requireLogin: true,
                    permissions:
                    {
                        role: ["admin"]
                    }
                }
            })

            .state('about',
            {
                url: '/about',

                views:
                {
                    'nav':
                    {
                        templateUrl: 'views/nav.html',
                        controller: 'NavController',
                        controllerAs: 'navCtrl'
                    },
                    'main':
                    {
                        templateUrl: "views/about.html"
                    }
                },

                data:
                {
                    requireLogin: true,
                    permissions:
                    {
                        role: ["reader", "publisher", "admin"]
                    }
                }
            })

    }]);