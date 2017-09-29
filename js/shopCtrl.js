angular.module("assessment").controller("shopCtrl", function($scope, shopService) {
	// $scope.getProducts = function() {
	// 	$scope.products = shopService.getProducts();
	// }
	shopService.getProducts().then(function(response) {
		$scope.products = response.data;
	});
});