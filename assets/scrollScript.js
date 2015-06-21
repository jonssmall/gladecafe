// create the module and name it scotchApp
var myApp = angular.module('myApp', []);

// create the controller and inject Angular's $scope
myApp.controller('menuController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	var cornBeef = {
		description : "Home-made corned beef on sourdough.",
		image: "photos/corned-beef.jpg",
		thumbnail: "photos/thumbnails/corned-beef.jpg"
	}
	var chickenClub = {
		description : "Grilled chicken club sandwich with freshly diced coleslaw.",
		image: "photos/chicken-club.jpg",
		thumbnail: "photos/thumbnails/chicken-club.jpg"
	}
	var hamYam = {
		description: "Diced ham baked into a sweet potato.",
		image: "photos/yam-ham.jpg",
		thumbnail: "photos/thumbnails/yam-ham.jpg"
	}
	var baconQuiche = {
		description: "Bacon, spinach and cheese baked golden brown in an egg quiche.",
		image: "photos/bacon-quiche.jpg",
		thumbnail: "photos/thumbnails/bacon-quiche.jpg"
	}
	var blueMangoPie = {
		description: "Fresh mango slices and blueberries.",
		image: "photos/blueberry-mango-pie.jpg",
		thumbnail: "photos/thumbnails/blueberry-mango-pie.jpg"
	}
	var eggsBenedict = {
		description: "Classic breakfast combination with ham and homemade hollandaise sauce.",
		image: "photos/eggs-benedict.jpg",
		thumbnail: "photos/thumbnails/eggs-benedict.jpg"
	}
	var oreoCheesecake = {
		description: "Crumbled oreo cookie baked into layers of creamy cheesecake.",
		image: "photos/oreo-cheesecake.jpg",
		thumbnail: "photos/thumbnails/oreo-cheesecake.jpg"
	}
	var monteCristo = {
		description: "Batter dipped bread with ham, egg, cheese and candied bacon.",
		image: "photos/monte-cristo.jpg",
		thumbnail: "photos/thumbnails/monte-cristo.jpg"
	}
	var applePie = {
		description: "Gluten-free, sugar-free apple pie.",
		image: "/photos/apple-pie.jpg",
		thumbnail: "/photos/thumbnails/apple-pie.jpg"
	}
	var chickenDumplings = {
		description: "Chicken & dumplings stew.",
		image: "/photos/chicken-dumplings.jpg",
		thumbnail: "/photos/thumbnails/chicken-dumplings.jpg"
	}
	var coconutPie = {
		description: "Gluten-free, sugar-free coconut pie.",
		image: "/photos/coconut-pie.jpg",
		thumbnail: "/photos/thumbnails/cocount-pie.jpg"
	}
	var codSandwich = {
		description: "Fried cod with bacon-crumbled macaroni & cheese.",
		image: "/photos/cod-sandwich.jpg",
		thumbnail: "/photos/thumbnails/cod-sandwich.jpg"
	}
	var manyMuffins = {
		description: "Assorted muffins baked fresh daily.",
		image: "/photos/many-muffins.jpg",
		thumbnail: "/photos/thumbnails/many-muffins.jpg"
	}
	var miniCheesecakes = {
		description: "Cheesecake flavors include oreo, blueberry, caramel & more.",
		image: "/photos/mini-cheesecakes.jpg",
		thumbnail: "/photos/thumbnails/mini-cheesecakes.jpg"
	}
	var monteKong = {
		description: "Battered banana bread with egg, creemcheese, bacon, ham & turkey sausage.",
		image: "/photos/monte-kong.jpg",
		thumbnail: "/photos/thumbnails/monte-kong.jpg"
	}
	var pumpkinPie = {
		description: "Freshly made pumpkin pie.",
		image: "/photos/pumpkin-pie.jpg",
		thumbnail: "/photos/thumbnails/pumpkin-pie.jpg"
	}
	var westernBurrito = {
		description: "Two scrambled eggs, ham, onion, sweet peppers & cheddar cheese.",
		image: "/photos/western-burrito.jpg",
		thumbnail: "/photos/thumbnails/western-burrito.jpg"
	}
	$scope.food = [cornBeef, chickenClub, hamYam, baconQuiche, blueMangoPie, eggsBenedict, oreoCheesecake, 
					monteCristo, applePie, chickenDumplings, coconutPie, codSandwich, manyMuffins, miniCheesecakes,
					monteKong, pumpkinPie];

	$scope.setModal = function(foodItem) {	
		$scope.currentPicture = foodItem.image;
		$scope.currentDescription = foodItem.description;
	}
});
