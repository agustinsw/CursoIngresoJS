function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

switch (mesDelAño) {
    case ("Julio"):
    mensaje = "Abrigate que hace frio.";
    break;
    case ("Agosto"):
    mensaje = "Abrigate que hace frio.";
    break;
    case ("Septiembre"):
    case ("Octubre"):
    case ("Noviembre"):
    case ("Diciembre"):
    case ("Enero"):
    mensaje = "Ya pasamos el frio, ahora el calor";
    break;
    case("Febrero"):
    case("Marzo"):
    case("Abril"):
    case("Mayo"):
    case("Junio"):
    mensaje = "Falta para el invierno.";
    break;
}

alert(mensaje);




}//FIN DE LA FUNCIÓN