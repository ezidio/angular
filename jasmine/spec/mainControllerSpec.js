describe("MainController", function() {
	
	beforeEach(module("angular.teste"));

	var $rootScope, $compile,$httpBackend,$controller;
	var scope = {};
	var MainController;

	beforeEach(inject(function(_$controller_, _$rootScope_, _$compile_, _$httpBackend_) {
		$rootScope = _$rootScope_;
		$compile = _$compile_;
		$httpBackend = _$httpBackend_;
		$controller = _$controller_;


		
	}));

	it("Deve iniciar com o nome", function() {
		MainController = $controller("MainController", {"$scope" : scope});

		expect(scope.nome).toBe("Everton");

		$httpBackend.expectGET('http://localhost:8080');
	})

	it("Deve executar a diretiva", function() {

		var conteudo = $compile("<div teste></div>")($rootScope);
		$rootScope.$digest();
		expect(conteudo.text()).toContain("Nome: Orbit");

		jQuery(conteudo).find("button").click();

		expect(conteudo.text()).toContain("Nome: Orbit sistemas");


	});

});