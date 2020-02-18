function mostrar()
{

var sexo = prompt("ingrese f ó m .");
var masculino = "m";
var femenino = "f";

while (sexo != "f" && sexo != "m") {
   sexo = prompt("Error, ingrese f ó m .");
    break;
}
//medio mocho el ejercicio


document.getElementById('Sexo').value=sexo;



}//FIN DE LA FUNCIÓN