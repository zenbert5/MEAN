var app = angular.module("scmain", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/main.html'
        })
        .when('/travel', {
            controller: 'travelController',
            templateUrl: 'views/travel.html'
        })
        .when('/venue', {
            controller: 'toDoController',
            templateUrl: 'views/toDo.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});