var app = angular.module('cmi', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);


app.config(function ($routeProvider) {

    $routeProvider
		.when('/', {
		    templateUrl: 'home.htm'
		})
        .when('/home', {
		    templateUrl: 'home.htm'
		})
		.when('/admission', {
		    templateUrl: 'admission.htm'
		});
});