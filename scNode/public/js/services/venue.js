app.factory('venue', ['$http', function($http) {
	return $http.get('/venue')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);