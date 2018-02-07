app.controller('MainController', ['$scope', function($scope) {
    $scope.programs = [
        {
            series: "Sherlock",
            series_img: "img/sherlock.jpg",
            genre: "Crime drama",
            season: 3,
            episode: "The Empty Hearse",
            description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
            datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
        },
        {
            series: "The Expanse",
            series_img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDlkMDUzMWEtMTZjYS00OGVjLWJmMGMtNmNhNjg5NGM1ZjQxXkEyXkFqcGdeQXVyNjc5Mjg0NjU@._V1_.jpg",
            genre: "Sci-fi Thriller",
            season: 2,
            episode: "Caliban's War",
            description: "On Jules-Pierre Mao's ship, his guards have been ordered to get rid of Avasarala, and they end up in a shootout with Cotyar and Bobbie. Cotyar gets shot in the midst of the gunfire.",
            datetime: new Date(2017, 04, 19, 22, 00, 00, 00)
        }
    ];
}]);