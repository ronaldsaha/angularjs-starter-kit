define([
    '../Module',
    './WidgetContentController',
    './WidgetLayoutController',
    './WidgetMenuController'
], function (module) {
    'use strict';

    module.controller('WidgetController', ['$controller', 'scope', 'element', 'widgetInfo',
        function ($controller, scope, element, widgetInfo) {
            this.render = function () {
                $controller(getControllerName(widgetInfo.value), {
                    scope: scope,
                    element: (widgetInfo.key.length > 0) ? element.find(widgetInfo.key) : element,
                    widget: widgetInfo.value
                }).render();
            };
            this.getScope = function () {
                return scope;
            };

            function getControllerName(widget) {
                if (widget._t == 'WidgetContent')
                    return 'WidgetContentController';
                if (widget._t == 'WidgetLayout')
                    return 'WidgetLayoutController';
            }
        }]);
});
