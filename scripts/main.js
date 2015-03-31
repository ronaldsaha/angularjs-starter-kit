require.config({
    baseUrl: './scripts/',
    paths: {
        'angular': 'Packages/angular/angular',
        'angular-route': 'Packages/angular-route/angular-route',
        'domReady': 'Packages/requirejs-domready/domReady',
        'text': 'Packages/requirejs-text/text',
        'jQuery': 'Packages/jquery/dist/jquery.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'jQuery': {
            exports: 'jQuery'
        }
    },

    deps: [
        './bootstrap'
    ]
});