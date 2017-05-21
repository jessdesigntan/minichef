	var mcApp = angular.module('mcApp', ['ngRoute']);


	mcApp.config(
    ['$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				title: 'home',
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			$routeProvider.when('/menu', {
				title: 'Menu',
				templateUrl : 'views/menu.html',
				controller  : 'menuController'
			})

			$routeProvider.when('/menu-details', {
				title: 'Menu Details',
				templateUrl : 'views/menu-details.html',
				controller  : 'menuDetailsController'
			})

			$routeProvider.when('/chef', {
				title: 'Chef',
				templateUrl : 'views/chef.html',
				controller  : 'chefController'
			})

			$routeProvider.when('/profile', {
				title: 'Profile',
				templateUrl : 'views/profile.html',
				controller  : 'profileController'
			})

			$routeProvider.when('/history', {
				title: 'Reservation History',
				templateUrl : 'views/history.html',
				controller  : 'reservationHistoryController'
			})

			$routeProvider.when('/order', {
				title: 'Order Details',
				templateUrl : 'views/order.html',
				controller  : 'orderController'
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
		$scope.imgPath = 'images';
	});

	mcApp.controller('menuController', function($scope) {
	});

	mcApp.controller('menuDetailsController', function($scope) {
	});

	mcApp.controller('chefController', function($scope) {
	});

	mcApp.controller('profileController', function($scope) {
	});

	mcApp.controller('reservationHistoryController', function($scope, $location) {
		$scope.historyDetails = function() {
		  $location.url('order');
		};
	});

	mcApp.controller('orderController', function($scope) {
	});
