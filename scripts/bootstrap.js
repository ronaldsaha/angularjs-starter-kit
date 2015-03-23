define([
    'require',
    'jQuery',
    'angular',
    'app',
], function (require, $, angular) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap($('body'), ['app']);
    });
});





