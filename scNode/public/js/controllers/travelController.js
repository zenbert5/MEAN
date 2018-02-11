app.controller('travelController', ['$scope', 'travel', function($scope, travel) {
    travel.success(function(data) {
        $scope.myTravels = data;
    });
}]);