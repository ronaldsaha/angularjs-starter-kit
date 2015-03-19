define(['./module'], function (module) {
    'use strict';

    var pages = [
        {
            key: '#/home',
            layout: '<div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer>',
            widgets: [{key: 'header', value: '1'}, {key: 'body', value: '2'}]
        },
        {
            key: '#/about',
            layout: '<div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer>',
            widgets: [{key: 'header', value: '1'}, {key: 'body', value: '3'}]
        }

    ];
    module.factory('pageService', ["$q", "$http", function ($q, $http) {

        this.getPageByRoute = function (route) {
            var deferred = $q.defer();
            setTimeout(function () {
                for (var i = 0; i < pages.length; ++i) {
                    if (pages[i].key == route) {
                        deferred.resolve(pages[i]);
                    }
                }
            }, 1000);

            return deferred.promise;
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
