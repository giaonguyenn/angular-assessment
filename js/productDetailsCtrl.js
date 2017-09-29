angular.module("assessment").controller("productDetailsCtrl", function($scope, shopService, $stateParams) {
	$scope.getProductId =  function () {
		shopService.getProductId($stateParams).then(function(response) {
			$scope.product = response.data;
		});
	};

	$scope.getProductId();
});
