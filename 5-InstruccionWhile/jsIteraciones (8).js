function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	respuesta = prompt("Quieres ingresar un numero?");

	while (respuesta == "si") {
		
		var numero = prompt("Ingrese su numero");
		if (numero >= 0) {
			positivo += parseInt(numero);
		}else {
			var resultadoNegativo;
			contador += 1;
			if (contador == 1) {
				 resultadoNegativo = parseInt(numero);
			}else {
				resultadoNegativo = resultadoNegativo * (parseInt(numero));
			}
			
		}
		
		respuesta = prompt("Quieres ingresar otro numero?");
		if (respuesta == "si") {
			continue;
		} else {
			break;
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=resultadoNegativo;

}//FIN DE LA FUNCIÓN