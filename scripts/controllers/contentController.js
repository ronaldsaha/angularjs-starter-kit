define(['./module'], function (module) {
    'use strict';

    module.controller('ContentController', ['$scope',
        function ($scope) {

            $scope.initialize = function (contentId) {
                console.log(contentId);
            };


        }]);
});
