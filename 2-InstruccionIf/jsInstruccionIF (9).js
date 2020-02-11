function mostrar()
{
	var min = 1
	var max = 10
	
	var random = Math.round(Math.random() * (max - min)) + min;

	console.log(random);

	alert(random);
}//FIN DE LA FUNCIÓN