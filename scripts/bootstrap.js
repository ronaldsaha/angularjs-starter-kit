define([
    'require',
    'jQuery',
    'angular',
    'Application'
], function (require, $, angular, app) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap($('body'), ['Application']);
    });
});





