define([
    'angular','angular-route',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute'
    ])
    //    run(function ($rootScope, $location) { //Insert in the function definition the dependencies you need.
    //    //Do your $on in here, like this:
    //    $rootScope.$on("$locationChangeStart",
    //        function (event, current, previous, rejection) {
    //            console.log($scope, $rootScope, $route, $location);
    //        });
    //    //$rootScope.$on("$locationChangeStart",function(event, next, current){
    //    //    //Do your things
    //    //    if(!$rootScope.isFormValid()){
    //    //        //prevent location change.
    //    //        event.preventDefault();
    //    //    }
    //    //});
    //});
});