angular.module('angular.teste', [])
	.controller("MainController", ['$scope', function($scope) {
		
		$scope.nome = "Everton";
		
		$scope.showConsoleLog = function() {
			console.log("teste "+$scope.nome);
		}
		
	}]);

	
// angular.bootstrap(document, ['angular.teste']);
