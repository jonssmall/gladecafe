// create the module and name it scotchApp
var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('navController', function($scope, $route) {
	$scope.$route = $route;
	$scope.message = "Sup";
});

// configure our routes
myApp.config(function($routeProvider) {
	$routeProvider

		// route for the home/about page
		.when('/', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController',
			activeTab: 'about'
		})

		// route for the menu page
		.when('/menu', {
			templateUrl : 'pages/menu.html',
			controller  : 'menuController',
			activeTab: 'menu'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController',
			activeTab: 'contact'
		});
});

// create the controller and inject Angular's $scope
myApp.controller('menuController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

myApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});
