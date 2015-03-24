define([
    'require',
    'jQuery',
    'angular',
    'app'
], function (require, $, angular, app) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap($('body'), ['app']);
    });
});





