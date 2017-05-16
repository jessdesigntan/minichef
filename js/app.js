	var mcApp = angular.module('mcApp', ['ngRoute']);

	mcApp.config(
    ['$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				title: 'home',
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			$routeProvider.when('/menu', {
				title: 'Menu',
				templateUrl : 'views/menu.html',
				controller  : 'menuController'
			})

			$routeProvider.otherwise({
	        redirectTo: '/'
	    });
  }]);

	mcApp.run(['$rootScope', function($rootScope) {
	    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
	        $rootScope.title = current.$$route.title;
	    });
	}]);

	// create the controller and inject Angular's $scope
	mcApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.imgPath = 'images';
	});

	mcApp.controller('menuController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});
