define(['./module'], function (directives) {
    'use strict';


    directives.directive('contentWidget', function ($compile) {
        return {
            restrict: 'E',
            scope: { key: '@' },
            template: '<p ng-click="add()">{{key}}</p>',
            controller: function ($scope, $element) {
                alert('hello')
//                $scope.add = function () {
//                    var el = $compile("<test text='n'></test>")($scope);
//                    $element.parent().append(el);
//                };
            }
        };
    });

});
