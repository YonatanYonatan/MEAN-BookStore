/**
 * Created by Yonatan.Vainer on 7/9/2015.
 */
angular.module('bookStoreApp',
    [
        'ui.router',
        'ngCookies',
        'BooksManagerService',
        'UsersManagerService',
        'AuthService',
        'DeleteBookController',
        'EditBookController',
        'InsertBookController',
        'UsersController',
        'LoadBooksController',
        'LoginController',
        'NavController',
        'AdminController',
        'appRoutes',
        'angularFileUpload',
        'ui.bootstrap',
        'appRun'
    ]);