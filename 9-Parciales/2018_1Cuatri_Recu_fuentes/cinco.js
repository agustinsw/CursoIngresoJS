function mostrar()
{
    var diaPedido = prompt("Ingrese un dia de la semana:");
    var mensaje;

    switch (diaPedido) {
        case "sabado":
        case "domingo":
            mensaje = "buen finde";
        break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje = "a trabajar?";
            break;
        default :
        mensaje = "dia invalido, ingrese denuevo o nunca y muerase";
        break;

    }
    alert(mensaje);

}
