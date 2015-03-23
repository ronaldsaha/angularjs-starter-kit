define([
    'angular', 'angular-route',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index',
    './repositories/index'
], function (angular) {
    'use strict';

    return angular
        .module("app", ['app.controllers', 'app.directives', 'app.filters', 'app.services', 'app.repositories', 'ngRoute'])
        .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
            //$routeProvider.when("/", {});
            //$routeProvider.when("/:link", {
            //    template: ' ',
            //    controller: function ($scope, $routeParams, page) {
            //        console.log($routeParams.link);
            //    },
            //    resolve: {
            //        page: function ($q, $route, $timeout, pageService) {
            //            var deferred = $q.defer();
            //            $timeout(function () {
            //                deferred.resolve($route.current.params.link);
            //            }, 2000);
            //            return deferred.promise;
            //        }
            //    }
            //});
            //$routeProvider.otherwise({redirectTo: '/'});
        }])
        .run(["$rootScope", "$location", "$route", "pageService", function ($rootScope, $location, $route, pageService) {
            $rootScope.$on("$locationChangeSuccess",
                function (event, current, previous, rejection) {
                    pageService.setupPage($location.path());
                });
            //$rootScope.$on("$routeChangeSuccess", function ($currentRoute, $previousRoute) {
            //    console.log('$routeChangeSuccess');
            //    pageService.setupPage($route.current.params.link);
            //});
        }]);
});