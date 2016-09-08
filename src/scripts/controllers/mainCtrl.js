var data = require('../data/books.json');

angular.module("listApp",[])
.controller('mainController', function($scope){

	$scope.products = data;
})