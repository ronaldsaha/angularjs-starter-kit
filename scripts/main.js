require.config({
    paths: {
        'angular': '../packages/angular/angular',
        'angular-route': '../packages/angular-route/angular-route',
        'domReady': '../packages/requirejs-domready/domReady',
        'jQuery': '../packages/jquery/dist/jquery.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'jQuery':{
            exports: 'jQuery'
        }
    },

    deps: [
        './bootstrap'
    ]
});