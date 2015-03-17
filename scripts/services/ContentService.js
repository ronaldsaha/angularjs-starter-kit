define(['./module'], function (services) {
    'use strict';

    var contents = [];
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

    function prepareData() {
        contents.push({key: '2', content: '<div class="col-lg-6"> <h4>Subheading</h4> <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p> <h4>Subheading</h4> <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p> <h4>Subheading</h4> <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p> </div> < div class ="col-lg-6"> <h4>Subheading</h4> < p > Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p> <h4>Subheading</h4> <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p> < h4 > Subheading</h4> <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p> </div>'});
        contents.push({key: '2', content: ''});
    }


});

/*
 var page = {
 widgets: [
 {key: '', value: ''},
 ],
 }
 */