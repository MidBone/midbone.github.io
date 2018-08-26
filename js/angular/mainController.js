angular.module('cmi').controller('mainController', function($scope, $translate){
	/*Change language*/
	$scope.changeLanguage = function(lang) {
		$scope.lang = lang;
		$translate.use(lang);
	}
});