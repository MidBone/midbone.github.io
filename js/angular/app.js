var app = angular.module('cmi', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'pascalprecht.translate']);

app.config(function ($routeProvider) {

    $routeProvider
		.when('/', {
		    templateUrl: 'home.html',
		    controller : "homeController"
		})
        .when('/home', {
		    templateUrl: 'home.html',
		    controller : "homeController"
		})
		.when('/admission', {
		    templateUrl: 'admission.html',
		    controller : "admissionController"
		})
		.when('/counseling', {
		    templateUrl: 'counseling.html',
		    controller : "admissionController"
		});
});

app.service('lang', function($http, $q) {	
	this.load = function(name) {
		var deferred = $q.defer();
		$http.get('language/' + name + '.json')
		.success(function(data){
			lang = data;
			deferred.resolve(data);
		});
		return deferred.promise;
	}
});

app.config(['$translateProvider', 'langProvider', function ( $translateProvider, langProvider ) {
	var meta_translations = {
		'english' : 'English',
		'marathi' : 'मराठी',
		'hindi' : 'हिंदी',
		'arabic' : 'عربى'
	}
	
	var mr_translations = {
	    "language" : 'मराठी',
	    'english' : 'English',
		'marathi' : 'मराठी',
		'hindi' : 'हिंदी',
		'arabic' : 'عربى'  
	}
	
	var hn_translations = {
	    "language" : "हिंदी",
	    'english' : 'English',
		'marathi' : 'मराठी',
		'hindi' : 'हिंदी',
		'arabic' : 'عربى'  
	}
	
	langProvider.$get().load('arb_arabic').then(function(lang){
		$translateProvider.translations('arb', lang);
	});
	
	langProvider.$get().load('en_english').then(function(lang){
		$translateProvider.translations('en', lang);
	});
	
	langProvider.$get().load('hn_hindi').then(function(lang){
		$translateProvider.translations('hn', lang);
	});
	
	langProvider.$get().load('mr_marathi').then(function(lang){
		$translateProvider.translations('mr', lang);
	});
	
	$translateProvider.preferredLanguage('en');
}]);