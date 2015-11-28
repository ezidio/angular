angular.module('angular.teste', [])

	.directive("teste", function() {
		return {
			"controller" : function($scope) {
				$scope.nome = "Orbit";

				$scope.muda = function() {
					$scope.nome = "Orbit sistemas";
				}
			},
			"template" : "<p>Nome: {{nome}} <button ng-click=\"muda()\">Clique</button></p>"
		}
	})

	.controller("MainController", ['$scope', '$http', function($scope, $http) {
		
		$scope.nome = "Everton";

		$http.get("http://localhost:8080");

	}]);		

