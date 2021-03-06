(function() {
    'use strict';
    angular
        .module('blogApp')
        .factory('K', K);

    K.$inject = ['$resource'];

    function K ($resource) {
        var resourceUrl =  'api/ks/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
