define([
    'require',
    'jQuery',
    'angular',
    'app',
    'routes'
], function (require, $, angular) {
    'use strict';

//    function registerController(moduleName, controllerName, template, container) {
//        // Load html file with content that uses Ctrl controller
//        $(template).appendTo(container);
//        // Here I cannot get the controller function directly so I
//        // need to loop through the module's _invokeQueue to get it
//        var queue = angular.module(moduleName)._invokeQueue;
//        for (var i = 0; i < queue.length; i++) {
//            var call = queue[i];
//            if (call[0] == "$controllerProvider" &&
//                call[1] == "register" &&
//                call[2][0] == controllerName) {
//                controllerProvider.register(controllerName, call[2][1]);
//            }
//        }
//
//        angular.injector(['ng', 'app']).invoke(function ($compile, $rootScope) {
//            $compile($('#ctrl' + controllerName))($rootScope);
//            $rootScope.$apply();
//        });
//    }

    var template =  '<div ng-controller="MyCtrl1"><span>{{message}}</span><input type="text" ng-model="message" /></div>'

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);


        $('body').injector().invoke(function($compile, $rootScope) {
            var $scope = $rootScope.$new();
            $('#test1').append(template)
            $compile($('#test1'))($scope);
            $scope.$apply();
        });
        $('body').injector().invoke(function($compile, $rootScope) {
            var $scope = $rootScope.$new();
            $('#test2').append(template)
            $compile($('#test2'))($scope);
            $scope.$apply();
        });

        //registerController('app.controllers','MyCtrl1','',$('#test'));
    });
});





