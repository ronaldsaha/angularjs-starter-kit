define(['./Module'], function (module) {
    'use strict';

    module.controller('PageController', ["PageService", function (pageService) {
        console.log('hello world')
        //scope.content = 'hello world';
        //scope.initialize = function (key) {
        //    contentRepository.getContentByKey(key)
        //        .then(function (content) {
        //            //$scope.content = content.content;
        //            scope.$digest();
        //        });
        //}
        //this.getTemplate = function () {
        //    return '<div>{{content}}</div>';
        //}
    }]);
});
