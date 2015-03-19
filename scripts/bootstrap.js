define([
    'require',
    'jQuery',
    'angular',
    'app',
    'routes'
], function (require, $, angular) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });
});





