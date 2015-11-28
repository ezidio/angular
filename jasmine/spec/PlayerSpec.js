describe("Player", function() {
      

    it("deve ser inicializado com nome", function() {

      var player = new Player("Everton", "Tavares");

      expect(player.nome).toBe("Everton");
      expect(player.sobrenome).toBe("Tavares")

    })


    it("O serviço deve salvar via http", function() {

      var expectedResult = "qq coisa";
      var player = {};
      
      var $http = {
        "post" : function() {}
      };
      spyOn($http, "post").and.returnValue(expectedResult);

      var service = new PlayerService($http);
      var result = service.save(player);

      expect($http.post).toHaveBeenCalledWith('url', player);
      expect(result).toBe(expectedResult);

    })





});
