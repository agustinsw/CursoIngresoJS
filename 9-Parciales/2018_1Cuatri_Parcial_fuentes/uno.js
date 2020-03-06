
function mostrar()
{
    var largo = prompt("Ingrese el largo del rectangulo");
        largo = parseInt(largo);
    var ancho = prompt("Ingrese el ancho del rectangulo");
        ancho = parseInt(ancho);

        var perimetro = parseInt(ancho * largo);

        alert("El perimetro del rectangulo es: " + perimetro);
}
