'use strict';

angular.module('oApp')
    .controller('MainCtrl', function ($scope, $http, $location) {
        $scope.path = $location.path();

        $http.get('/api/wiki',
            {
                params: {path: $scope.path},
                cache: false
            }).success(function (response) {
                $scope.existing = response.existing;
                $scope.text = response.text;
            });


        $scope.createNewPage = function () {
            alert("create");
        };

    });
