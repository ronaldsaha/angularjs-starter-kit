define(['./module'], function (services) {
    'use strict';

    var contents = [];
    contents.push({
        key: '1',
        content: '<nav> <ul class="nav nav-pills pull-right"> <li role="presentation" class="active"><a href="#">Home</a></li> <li role="presentation"><a href="#/About">About</a></li> <li role="presentation"><a href="#">Contact</a></li> </ul> </nav> <h3 class="text-muted">Project name</h3>'
    });
    contents.push({
        key: '2',
        content: '<h1>Jumbotron heading</h1> <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> <p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>'
    });
    contents.push({
        key: '3',
        content: '<div class="col-lg-6"><h4>Subheading</h4> <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p> <h4> Subheading</h4> <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p> <h4>Subheading</h4> <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p></div> < div class ="col-lg-6"> <h4>Subheading</h4> < p > Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p> <h4>Subheading</h4> <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p> < h4 > Subheading</h4> <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>'
    });

    services.service('ContentService',
        ["$q", "$http",
            function ($q, $http) {

                this.getContentByKey = function (key) {
                    var deferred = $q.defer();

                    deferred.resolve('Hello, ' + name + '!');
                    deferred.reject('Greeting ' + name + ' is not allowed.');
                    deferred.notify('Notfication ' + name);

                    return deferred.promise;
                }


                var promise = getPageByRoute('');
                promise.then(
                    function () {
                    },
                    function () {
                    },
                    function () {
                    });

            }]);

});

/*
 var page = {
 widgets: [
 {key: '', value: ''},
 ],
 }
 */