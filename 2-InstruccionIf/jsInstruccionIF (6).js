function mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value;

if (edad >= 18)
{
    alert("eres MAYOR");
}else 
{
    if (edad >= 13 && edad <= 17)
    {
        alert("eres ADOLESCENTE");
    }
    if (edad < 13 && edad > 0)
    {
        alert("eres MENOR");
    }

}



}//FIN DE LA FUNCIÓN