define(['./module'], function (module) {
    'use strict';

    module.service('pageService', ["$rootElement", "$q", "$http", "$compile", "pageRepository", function ($rootElement, $q, $http, $compile, pageRepository) {

        this.setupPage = function (link) {
            pageRepository.getPageByRoute(link).then(function (page) {
                if (page) {
                    $rootElement.append(page.layout);
                    for (var i = 0; i < page.widgets.length; ++i) {
                        //var widgetElement = angular.element('<div ng-controller="ContentController" ng-init="initialize(' + page.widgets[i].value + ')"></div>');
                        var widgetElement = angular.element('<contentWidget key="' + page.widgets[i].value + '" />');
                        var scope = angular.element($rootElement).scope().$new();
                        var widgetDom = $compile(widgetElement)(scope);
                        $rootElement.find('#' + page.widgets[i].key).append(widgetDom);

                        //var $widgetNode = $('<div ng-controller="ContentController" ng-init="initialize(' + page.widgets[i].value + ')"></div>');
                        //$rootElement.find('#' + page.widgets[i].key).append($widgetNode);
                        //angular.element($rootElement).injector().invoke(function ($compile) {
                        //    var scope = angular.element($widgetNode).scope();
                        //    $compile($widgetNode)(scope);
                        //});
                    }
                }
            });
        }
    }]);
});

//* ```js
//* var $div = $('<div ng-controller="MyCtrl">{{content.label}}</div>');
//* $(document.body).append($div);
//*
//* angular.element(document).injector().invoke(function($compile) {
//    *   var scope = angular.element($div).scope();
//    *   $compile($div)(scope);
//    * });
//* ```
