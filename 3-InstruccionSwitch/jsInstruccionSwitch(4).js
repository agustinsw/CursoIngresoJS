function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

//alert (mesDelAño);
switch (mesDelAño) {
    case ("Febrero"):
    mensaje = "Este mes tiene 28 dias";
    break;
    case("Marzo"):
    case("Mayo"):
    case("Julio"):
    case("Agosto"):
    case("Octube"):
    case("Diciembre"):
    case("Enero"):
    mensaje = "Este mes tiene 31 dias"
    break;
    default :
    mensaje = "Este mes tiene 30 dias";
    break;
}
alert(mensaje);
	



}//FIN DE LA FUNCIÓN