app.controller('toDoController', ['$scope', 'venue', function($scope, venue) {
	venue.success(function(data) {
		$scope.venues = data;
	});
}]);