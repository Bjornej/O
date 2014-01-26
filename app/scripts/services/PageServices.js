'use strict'

var PageServices = angular.module('PageServices', ['ngResource']);


PageServices.factory("Page", ["$resource", function ($resource) {
    return $resource('pages/:path',
    {},
    { query:
    { method: 'GET',
        params: { path: 'path'}
    }
    });

} ]);