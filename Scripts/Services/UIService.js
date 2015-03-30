define([
    './Module',
    'angular'
], function (module, ng) {
    'use strict';

    module.service('UIService', ['$compile',
        function ($compile) {

            this.createDom = function (template, scope) {
                var dom = ng.element(template);
                $compile(dom)(scope);
                return dom;
            }
        }]);
});
