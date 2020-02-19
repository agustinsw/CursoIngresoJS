function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	respuesta = prompt("Quieres ingresar un numero?");

	while (respuesta == "si") {
		if (respuesta == "no"){
			break;
		}
		var numero = prompt("Ingrese su numero");
		acumulador += parseInt(numero);
		contador += 1;
		respuesta = prompt("Quieres ingresar otro numero?");
		if (respuesta == "si") {
			continue;
		}
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN