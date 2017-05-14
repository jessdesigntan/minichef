	var mcApp = angular.module('mcApp', ['ngRoute']);

	mcApp.config(
    ['$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				title: 'home',
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			$routeProvider.when('/about', {
				title: 'about',
				templateUrl : 'views/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			$routeProvider.when('/contact', {
				title: 'contact',
				templateUrl : 'views/contact.html',
				controller  : 'contactController'
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

	mcApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	mcApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
