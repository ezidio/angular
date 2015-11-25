export class moduleTest {

  constructor($scope) {
  	this.nome = "Everton";
  }

  showConsoleLog() {
    console.log("Teste Babelify! "+this.nome);
  }
}

moduleTest.$inject = ['$scope'];