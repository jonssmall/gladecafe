// create the module and name it scotchApp
var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('navController', function($scope, $route) {
	$scope.$route = $route;
	$scope.message = "Sup";
});

// configure our routes
myApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController',
			activeTab: 'home'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController',
			activeTab: 'about'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController',
			activeTab: 'contact'
		});
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

myApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});
