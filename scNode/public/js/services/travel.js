app.factory('travel', ['$http', function($http) {
    return $http.get('/travel')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);