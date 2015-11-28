function Player(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}




function PlayerService($http) {

	this.save = function(player) {
		return $http.post('url', player);
	}

}