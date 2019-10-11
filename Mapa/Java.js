function fCidade() {
	var cidade = document.getElementById("campo").value;
	return cidade;

}

var condicao
function dados() {
	//fazendo a requisição
	var requisicao = new XMLHttpRequest();
	var url = "http://api.mapbox.com/geocoding/v5/mapbox.places/"+ fCidade() +".json?access_token=pk.eyJ1IjoibGF1cmluZWEiLCJhIjoiY2sxaHI2M3J2MWk3bjNncW93a2ZneTIyMSJ9.IsCqY34SiFRNoGtHLTnEtQ"
    requisicao.open('GET', url, true); //abrindo a conexão

    requisicao.onreadystatechange = function(e) {
    	if (this.readyState == 4) {
    		console.log(JSON.parse(this.response));
    		condicao = JSON.parse(this.response);
    		valor();
    	}
    }
    requisicao.send();
}

function valor() {
	document.getElementById('msg').innerHTML = "Os resultados da busca são estes:";

	var i;
	for (i=0; i<5; i++) {
		var resultado = "-> Nome do lugar: " + condicao.features[i].place_name;
		var coordenadas = "<br>* Coordenadas: " + condicao.features[i].geometry.coordinates[1] + ", " + condicao.features[i].geometry.coordinates[0];
		document.getElementById(i).innerHTML = resultado + coordenadas;
	}
}

function main() {
	dados();
}