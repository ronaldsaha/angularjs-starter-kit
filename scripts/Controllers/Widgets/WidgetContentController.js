define([
    '../Module',
    'angular',
    'text!../../Templates/Widgets/WidgetContentTemplate.html'
], function (module, ng, Template) {
    'use strict';

    return module.controller('WidgetContentController', ['$controller', 'UIService', '$sce', 'ContentService', 'scope', 'element', 'widget',
        function ($controller, uiService, $sce, contentService, scope, element, widget) {
            scope.content = '';
            this.render = function () {
                element.empty().append(uiService.createDom(Template, scope));
                contentService.getContentByKey(widget.contentId)
                    .then(function (content) {
                        scope.content = $sce.trustAsHtml(content.content);
                    });
            };
            this.getScope = function () {
                return scope;
            };
        }]);
});
