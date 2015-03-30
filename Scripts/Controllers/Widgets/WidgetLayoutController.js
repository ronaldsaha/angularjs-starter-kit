define(['../Module'], function (module) {
    'use strict';

    return module.controller('WidgetLayoutController', ['$controller', 'scope', 'element', 'widget',
        function ($controller, scope, element, widget) {
            this.render = function () {
                element.empty().append(widget.layout);
                for (var i = 0; i < widget.widgets.length; ++i) {
                    $controller('WidgetController', {
                        scope: scope.$new(),
                        element: element,
                        widgetInfo: widget.widgets[i]
                    }).render();
                }
            };
            this.getScope = function () {
                return scope;
            };
        }]);
});
