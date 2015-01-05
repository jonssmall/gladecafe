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
	var cornBeef = {
		description : "Home-made corned beef on sourdough.",
		image: "photos/corned-beef.jpg"
	}
	var chickenClub = {
		description : "Grilled chicken club sandwich with freshly diced coleslaw.",
		image: "photos/chicken-club.jpg"
	}
	var hamYam = {
		description: "Diced ham baked into a sweet potato.",
		image: "photos/yam-ham.jpg"
	}
	var baconQuiche = {
		description: "Bacon, spinach and cheese baked golden brown in an egg quiche.",
		image: "photos/bacon-quiche.jpg"
	}
	var blueMangoPie = {
		description: "Fresh mango slices and blueberries.",
		image: "photos/blueberry-mango-pie.jpg"
	}
	var eggsBenedict = {
		description: "Classic breakfast combination with ham and homemade hollandaise sauce.",
		image: "photos/eggs-benedict.jpg"
	}
	var oreoCheesecake = {
		description: "Crumbled oreo cookie baked into layers of creamy cheesecake.",
		image: "photos/oreo-cheesecake.jpg"
	}
	var monteCristo = {
		description: "Batter dipped bread with ham, egg, cheese and candied bacon.",
		image: "photos/monte-cristo.jpg"
	}
	$scope.food = [cornBeef, chickenClub, hamYam, baconQuiche, blueMangoPie, eggsBenedict, oreoCheesecake, monteCristo]

	$scope.setModal = function(foodItem) {	
		$scope.currentPicture = foodItem.image;
		$scope.currentDescription = foodItem.description;
	}
});

myApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';	
});

myApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});
