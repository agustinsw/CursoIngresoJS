function mostrar()
{

    var precio = parseInt(prompt("Ingrese el precio"));
    var descuento = parseInt(prompt("Ingrese el porcentaje de descuento"));
    var descuentoFinal = precio - ((precio / 100) * descuento);

    document.getElementById("elPrecioFinal").value = descuentoFinal;
}
