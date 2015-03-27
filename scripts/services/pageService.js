define(['./Module'], function (module) {
    'use strict';

    var page = {
        key: '/home',
        hasParent: true,
        parent: {
            hasParent: false,
            widgets: [
                {
                    Key: 'body',
                    Value: {
                        _t: 'WidgetLayout',
                        layout: '<div class="container"><div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer></div>',
                        widgets: [{}]
                    }
                }
            ]
        },
        widgets: [
            {
                Key: 'body',
                Value: {
                    _t: 'WidgetLayout',
                    layout: '<div class="container"><div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer></div>',
                    widgets: [{}]
                }
            }
        ]
    }

    var pages = [
        {
            key: '/home',
            layout: '<div class="container"><div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer></div>',
            widgets: [{key: 'header', value: '1'}, {key: 'body', value: '2'}]
        },
        {
            key: '/about',
            layout: '<div class="container"><div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer></div>',
            widgets: [{key: 'header', value: '1'}, {key: 'body', value: '3'}]
        }

    ];

    module.service('PageService', ["$rootElement", "$q", "$http", "$compile", "$controller",
        function ($rootElement, $q, $http, $compile, $controller) {

            this.getPageByRoute = function (route) {
                var deferred = $q.defer();
                setTimeout(function () {
                    for (var i = 0; i < pages.length; ++i) {
                        if (pages[i].key == route) {
                            deferred.resolve(pages[i]);
                        }
                    }
                    deferred.resolve(pages[0]);
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
