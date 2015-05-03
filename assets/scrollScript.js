// create the module and name it scotchApp
var myApp = angular.module('myApp', []);

// create the controller and inject Angular's $scope
myApp.controller('menuController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	var cornBeef = {
		description : "Home-made corned beef on sourdough.",
		image: "/photos/corned-beef.jpg",
		thumbnail: "/photos/thumbnails/corned-beef.jpg"
	}
	var chickenClub = {
		description : "Grilled chicken club sandwich with freshly diced coleslaw.",
		image: "/photos/chicken-club.jpg",
		thumbnail: "/photos/thumbnails/chicken-club.jpg"
	}
	var hamYam = {
		description: "Diced ham baked into a sweet potato.",
		image: "/photos/yam-ham.jpg",
		thumbnail: "/photos/thumbnails/yam-ham.jpg"
	}
	var baconQuiche = {
		description: "Bacon, spinach and cheese baked golden brown in an egg quiche.",
		image: "/photos/bacon-quiche.jpg",
		thumbnail: "/photos/thumbnails/bacon-quiche.jpg"
	}
	var blueMangoPie = {
		description: "Fresh mango slices and blueberries.",
		image: "/photos/blueberry-mango-pie.jpg",
		thumbnail: "/photos/thumbnails/blueberry-mango-pie.jpg"
	}
	var eggsBenedict = {
		description: "Classic breakfast combination with ham and homemade hollandaise sauce.",
		image: "/photos/eggs-benedict.jpg",
		thumbnail: "/photos/thumbnails/eggs-benedict.jpg"
	}
	var oreoCheesecake = {
		description: "Crumbled oreo cookie baked into layers of creamy cheesecake.",
		image: "/photos/oreo-cheesecake.jpg",
		thumbnail: "/photos/thumbnails/oreo-cheesecake.jpg"
	}
	var monteCristo = {
		description: "Batter dipped bread with ham, egg, cheese and candied bacon.",
		image: "/photos/monte-cristo.jpg",
		thumbnail: "/photos/thumbnails/monte-cristo.jpg"
	}
	$scope.food = [cornBeef, chickenClub, hamYam, baconQuiche, blueMangoPie, eggsBenedict, oreoCheesecake, monteCristo]

	$scope.setModal = function(foodItem) {	
		$scope.currentPicture = foodItem.image;
		$scope.currentDescription = foodItem.description;
	}
});
