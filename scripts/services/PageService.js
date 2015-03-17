define(['./module'], function (services) {
    'use strict';

    var pages = [];
    services.service('PageService',
        ["$q", "$http",
            function ($q, $http) {

                this.getPageByRoute = function (route) {
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

    var pages = [
        {id:'1',url:'',layout:'<div></div>'},
    ];


});

/*
 var page = {
 widgets: [
 {key: '', value: ''},
 ],
 }
 */