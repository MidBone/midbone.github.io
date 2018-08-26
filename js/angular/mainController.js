angular.module('cmi').controller('mainController', function($scope, $rootScope, $translate){
	/*Change language*/
	$scope.changeLanguage = function(lang) {
		$rootScope.lang = lang;
		$translate.use(lang);
	}
});