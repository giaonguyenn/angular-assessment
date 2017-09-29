angular.module("assessment").service("shopService", function($http) {
	this.getProducts = function () {
		return $http.get("http://practiceapi.devmountain.com/products");
		// .then(function(results) {
		// 	console.log(results);
			// return response.data;
		// });
	};

	this.getProductId = function (product) {
		var id = product.id;
		return $http.get("http://practiceapi.devmountain.com/products/" + id);
	};
});