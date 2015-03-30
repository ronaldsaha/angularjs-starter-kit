define([
    'angular',
    'Application'
], function (ng) {
    'use strict';

    ng.injector(['Application.Factories']).get('ApplicationContext').startApplication();
});





