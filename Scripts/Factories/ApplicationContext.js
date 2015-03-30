define([
    './Module',
    'angular', 'jQuery'
], function (module, ng, $) {
    'use strict';

    module.factory('ApplicationContext', function () {
        return {
            startApplication: function () {
                ng.bootstrap($('body'), ['Application']);
            }
        }
    });
});
