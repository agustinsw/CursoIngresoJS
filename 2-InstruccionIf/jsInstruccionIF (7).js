function mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value;
var civil = document.getElementById("estadoCivil").value;

if (edad < 18 && civil != "Soltero")
{
    alert("Es muy pequeño para NO ser soltero");
}

	


}//FIN DE LA FUNCIÓN