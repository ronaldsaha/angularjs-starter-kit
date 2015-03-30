define([
    '../Module',
    'text!../Templates/Widgets/ContentWidgetTemplate.html'
], function (module, Template) {
    'use strict';

    module.directive('ContentWidget', function () {
        return {
            restrict: 'E',
            replace: 'true',
            scope: {key: '@'},
            template: Template,
            controller: function ($scope, $element, $attrs, $transclude, $sce, ContentService) {
                $scope.initialize = function () {
                    ContentService.getContentByKey($scope.key)
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
