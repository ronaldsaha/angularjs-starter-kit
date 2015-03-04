require.config({
    paths: {
        'angular': '../packages/angular/angular',
        'angular-route': '../packages/angular-route/angular-route',
        'domReady': '../packages/requirejs-domready/domReady'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        './bootstrap'
    ]
});