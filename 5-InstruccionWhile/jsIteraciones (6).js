function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var numeroCinco;
	var contador=0;
	

	numeroUno = prompt("Ingrese el primer numero");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("Ingrese el segundo numero");
	numeroDos = parseInt(numeroDos);
	numeroTres = prompt("Ingrese el tercer numero");
	numeroTres = parseInt(numeroTres);
	numeroCuatro = prompt("Ingrese el cuarto numero");
	numeroCuatro = parseInt(numeroCuatro);
	numeroCinco = prompt("Ingrese el quinto numero");
	numeroCinco = parseInt(numeroCinco);

	var acumulador=numeroUno + numeroDos + numeroTres + numeroCuatro + numeroCinco;
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN