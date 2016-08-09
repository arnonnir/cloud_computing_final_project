app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/login'
        })
        .when('/login', {
            templateUrl: 'pages/login/login.html',
            controller: 'loginController'
        })
    }
])
app.factory('loginSrv', function($http) {
    var service = {};

    return service;
})
app.controller("loginController", ["$scope", "loginSrv", function($scope, loginSrv) {
    var model = {};








    $scope.model = model;
}]);