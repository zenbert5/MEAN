app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Welcome to the jungle';
    $scope.promo = "Free burritos for all";
    $scope.products = [
        {
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/the-book-of-trees.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/program-or-be-programmed.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Once upon a chimp',
            price: 5.50,
            pubdate: new Date('2000', '01', '01'),
            cover: 'https://images.penguinrandomhouse.com/cover/9780394800134',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'Light caster',
            price: 666,
            pubdate: new Date('0000', '01', '01'),
            cover: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Rubens_-_Prometheus_Bound.jpg',
            likes: 0,
            dislikes: 0
        }
    ];
    /*  $scope.product = {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08')
      }; */
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };
}]);