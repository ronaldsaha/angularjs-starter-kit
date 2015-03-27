define(['../Module'], function (module) {
    'use strict';

    module.directive('ContentWidget', function () {
        return {
            restrict: 'E',
            replace: 'true',
            scope: {key: '@'},
            template: '<div ng-bind-html="content"></div>',
            controller: function ($scope, $element, $attrs, $transclude, $sce, contentRepository) {
                $scope.initialize = function () {
                    contentRepository.getContentByKey($scope.key)
                        .then(function (content) {
                            $scope.content = $sce.trustAsHtml(content.content);
                        });
                }
            },
            link: {
                pre: function preLink(scope, iElement, iAttrs, controller) {
                },
                post: function postLink(scope, iElement, iAttrs, controller) {
                    scope.initialize();
                }
            }
        };
    });

});
