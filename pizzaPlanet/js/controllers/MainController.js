app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();

    $scope.appetizers = [
        {
            name: 'Caprese',
            description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
            price: 4.95
        },
        {
            name: 'Mozzarella Sticks',
            description: 'Served with marinara sauce.',
            price: 3.95
        },
        {
            name: 'Bruschetta',
            description: 'Grilled bread garlic, tomatoes, olive oil.',
            price: 4.95
        }
    ];

    $scope.mains = [
        {
            name: 'New York T-Bone Steak (12oz)',
            description: 'AAA premium cut best served medium rare 30%, coffee ground roast.',
            price: 25.99
        },
        {
            name: 'Peking Duck (1/2)',
            description: 'Roasted Hong Kong style with special buns and sauce.',
            price: 16.50
        },
        {
            name: 'Alaskan King Crab (whole)',
            description: 'Fresh Alaskan King Crab drop shipped daily.',
            price: 39
        }
    ];

    $scope.extras = [
        {
            name: 'Tower of Glacier',
            description: '9 scoops of mixed sorbet and ice cream topped with candy sprinkles and cream.',
            price: 13.55
        },
        {
            name: 'Hell Pie',
            description: 'Worldly renown apple and pear pie with secret hot burning sauce and spices',
            price: 16.66
        },
        {
            name: 'House Port',
            description: 'Best port in town.',
            price: 9.50
        }
    ];

}]);