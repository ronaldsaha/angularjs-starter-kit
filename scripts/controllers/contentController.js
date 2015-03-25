define(['./module'], function (module) {
    'use strict';

    module.controller('ContentController', ["contentRepository", function (scope, element, contentRepository) {
        scope.content = 'hello world';
        scope.initialize = function (key) {
            contentRepository.getContentByKey(key)
                .then(function (content) {
                    //$scope.content = content.content;
                    scope.$digest();
                });
        }
        this.getTemplate = function () {
            return '<div>{{content}}</div>';
        }
    }]);
});
