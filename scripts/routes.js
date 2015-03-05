define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'scripts/views/partial1.html',
            controller: 'MyCtrl1'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'scripts/views/partial2.html',
            controller: 'MyCtrl2'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
});
