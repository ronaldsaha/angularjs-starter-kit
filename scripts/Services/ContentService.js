define(['./Module'], function (module) {
    'use strict';

    var contents = [
        {
            key: '1',
            content: '<div class="header clearfix"><nav> <ul class="nav nav-pills pull-right"> <li role="presentation"><a href="#/home">Home</a></li> <li role="presentation"><a href="#/about">About</a></li> </ul> </nav> <h3 class="text-muted">Project name</h3></div>'
        },
        {
            key: '2',
            content: '<div class="jumbotron"><h1>Jumbotron heading</h1> <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> <p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p></div>'
        },
        {
            key: '3',
            content: '<div class="row marketing"><div class="col-lg-6"><h4>Subheading</h4> <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p> <h4> Subheading</h4> <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p> <h4>Subheading</h4> <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p></div> < div class ="col-lg-6"> <h4>Subheading</h4> < p > Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p> <h4>Subheading</h4> <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p> < h4 > Subheading</h4> <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p></div>'
        }
    ];

    module.service('ContentService', ["$rootElement", "$q", "$http", "$compile", "$controller",
        function ($rootElement, $q, $http, $compile, $controller) {

            this.getContentByKey = function (key) {
                var deferred = $q.defer();
                setTimeout(function () {
                    for (var i = 0; i < contents.length; ++i) {
                        if (contents[i].key == key) {
                            deferred.resolve(contents[i]);
                        }
                    }
                }, 1000);

                return deferred.promise;
            }
        }]);
});