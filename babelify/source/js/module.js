export class moduleTest {

  constructor($scope) {
  	this.name = "Everton";
  }

  showConsoleLog() {
    console.log("ES6 module test! "+this.name);
  }
}

moduleTest.$inject = ['$scope'];