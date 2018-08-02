var myapp = angular.module("MyAngularApp",['ngRoute']);

myapp.controller("myAppController",function($scope ){
	$scope.sum =0;
	$scope.names=[{
		"name":"Prabhat"
	},{
		"name":"Priyanka"
	},{
		"name":"Papa"
	}];
	console.log(":"+$scope.ph_number)
});