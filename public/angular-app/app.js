angular.module('meanhotel', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'angular-app/hotels.html',
                controller: 'HotelsController'
            })
            .when('/home', {
                templateUrl: 'public/hotel.html',
                controller: 'HotelsController'
            });
    })
    .controller('HotelsController', ['$scope', function($scope) {
        $scope.title = 'MEAN Hotel App';
        $scope.newTitle = 'MEAN Hotel New App'
    }]);