//module goes here
//definte 2 separate routes + otherwise route
var app = angular.module("animalApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",
	{
		controller: "mainController",
		templateUrl: "html/animals.html"
	})
	.when("/dog",
	{
		controller: "dogController",
		templateUrl: "html/dog.html"
	})
	.when("/cat",
	{
		controller: "catController",
		templateUrl: "html/cat.html"
	})
	.when("/porcupine",
	{
		controller: "porcupineController",
		templateUrl: "html/porcupine.html"
	})
	.when("/pig",
	{
		controller: "pigController",
		templateUrl: "html/pig.html"
	})
	.otherwise({redirectTo: "/"});

});

