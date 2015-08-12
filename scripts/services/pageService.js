define(['./Module'], function (module) {
    'use strict';

    var pages = [
        {
            key: '/home',
            hasParent: true,
            parent: {
                hasParent: false,
                widgets: [
                    {
                        key: '',
                        value: {
                            _t: 'WidgetLayout',
                            layout: '<div class="container"><div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer></div>',
                            widgets: [{key: '#header', value: {_t: 'WidgetContent', contentId: 1}}]
                        }
                    }
                ]
            },
            widgets: [{key: '#body', value: {_t: 'WidgetContent', contentId: 2}}]
        },
        {
            key: '/about',
            hasParent: true,
            parent: {
                hasParent: false,
                widgets: [
                    {
                        key: 'body',
                        value: {
                            _t: 'WidgetLayout',
                            layout: '<div class="container"><div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer></div>',
                            widgets: [{key: '#header', value: {_t: 'WidgetContent', contentId: 1}}]
                        }
                    }
                ]
            },
            widgets: [{key: '#body', value: {_t: 'WidgetContent', contentId: 3}}]
        }
    ];

    module.service('PageService', ["$q", "$http",
        function ($q, $http) {

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

//var deferred = $q.defer();
//var promise = deferred.promise;
//promise.success = function (onSuccess) {
//    promise.onSuccess = onSuccess;
//    return promise;
//}
//promise.failed = function (onFailed) {
//    promise.onFailed = onFailed;
//    return promise;
//}
//
//$http.get('api/widgets/form/' + listId + '/' + formId).then(function (response) {
//    deferred.resolve(response.data);
//})
//promise.then(function (data) {
//    promise.onSuccess(data.form, data.defaultFormContent);
//})
//return promise;
