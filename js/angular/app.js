var app = angular.module('cmi', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'pascalprecht.translate']);

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
		})
		.when('/counseling', {
		    templateUrl: 'counseling.htm'
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
	
	var en_translations = {
		"language" : "English",
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
	$translateProvider.translations('en', en_translations);
	$translateProvider.translations('mr', mr_translations);
	$translateProvider.translations('hn', hn_translations);
	$translateProvider.translations('meta', meta_translations);
	
	$translateProvider.preferredLanguage('en');
}]);