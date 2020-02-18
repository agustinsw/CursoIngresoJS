var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
		 var max;
		 var min;
	max = 4;
	min = 1;

	eleccionMaquina = Math.floor(Math.random() * (max - min)) + min;
	console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	console.log(piedra);
	switch (eleccionMaquina) {
		case 1:
		//alert("Empate");
		ContadorDeEmpates = ContadorDeEmpates + 1;
		break;
		case 2:
		//alert("Ganaste");
		ContadorDeGanadas = ContadorDeGanadas + 1;
		break;
		case 3:
		//alert("Perdio");
		ContadorDePerdidas = ContadorDePerdidas + 1;
		break;
	}
	mostrarResultado();


}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina) {
		case 1:
		//alert("Empate");
		ContadorDeEmpates = ContadorDeEmpates + 1;
		break;
		case 2:
		//alert("Ganaste");
		ContadorDeGanadas = ContadorDeGanadas + 1;
		break;
		case 3:
		//alert("Perdio");
		ContadorDePerdidas = ContadorDePerdidas + 1;
		break;
	}
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina) {
		case 1:
		//alert("Empate");
		ContadorDeEmpates = ContadorDeEmpates + 1;
		break;
		case 2:
		//alert("Ganaste");
		ContadorDeGanadas = ContadorDeGanadas + 1;
		break;
		case 3:
		//alert("Perdio");
		ContadorDePerdidas = ContadorDePerdidas + 1;
		break;
	}
	
	mostrarResultado();
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	comenzar();

	document.getElementById("ganadas").value = "gano " + ContadorDeGanadas;
	document.getElementById("perdidas").value = "perdio " + ContadorDePerdidas;
	document.getElementById("empatadas").value = "empato " + ContadorDeEmpates;
}