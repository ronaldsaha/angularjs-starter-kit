define([
    'angular', 'angular-route',
    './controllers/index',
    './directives/index',
    './filters/index',
    './repositories/index',
    './services/index'
], function (angular) {
    'use strict';

    var app = angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'app.repositories',
        'ngRoute'
    ]);

    app.run(["$rootScope", "$location", "app.services.pageService", function ($rootScope, $location, pageService) {
        $rootScope.$on("$locationChangeStart",
            function (event, current, previous, rejection) {
                var app = angular.module('app');
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
    }]);

    return app;
});