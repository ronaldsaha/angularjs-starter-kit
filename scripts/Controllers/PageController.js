define(['./Module'], function (module) {
    'use strict';

    module.controller('PageController', ['$controller', 'scope', 'element', 'page', function ($controller, scope, element, page) {
        this.render = function () {
            for (var i = 0; i < page.widgets.length; ++i) {
                $controller('WidgetController', {
                    scope: scope.$new(),
                    element: element,
                    widgetInfo: page.widgets[i]
                }).render();
            }
        }
        this.getScope = function () {
            return scope;
        }
    }]);
});
