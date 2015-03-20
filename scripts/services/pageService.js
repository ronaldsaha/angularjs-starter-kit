define(['./module'], function (module) {
    'use strict';

    module.service('pageService', ["$q", "$http","app.repositories.pageRepository", function ($q, $http, pageRepository) {

        this.setupPage = function (link) {
            console.log(link);
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
