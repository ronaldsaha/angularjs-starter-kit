define([
    '../Module',
    'angular',
    'text!../../Templates/Widgets/WidgetMenuTemplate.html'
], function (module, ng, Template) {
    'use strict';

    return module.controller('WidgetMenuController', ['scope', 'element', 'widget',
        function (scope, element, widget) {
            this.render = function () {
            };
            this.getScope = function () {
                return scope;
            };
        }]);
});

