define([
    'angular','angular-route',
    './controllers/index',
    './directives/index',
    './filters/index',
    './repositories/index',
    './services/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute'
    ]).run(function ($rootScope, $location) {
        $rootScope.$on("$locationChangeStart",
            function (event, current, previous, rejection) {
                console.log($location.url());
                console.log(event, current, previous, rejection);
            });
        //$rootScope.$on("$locationChangeStart",function(event, next, current){
        //    //Do your things
        //    if(!$rootScope.isFormValid()){
        //        //prevent location change.
        //        event.preventDefault();
        //    }
        //});
    });
});