function mostrar()
{
    var horaPedida = parseInt(prompt("Ingrese la hora del dia bobito"));
    var mensaje;

    switch(horaPedida) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            mensaje = "es de ma;ana gilaso";
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            mensaje = "es la tarde rompete ese";
        break;
        default:
            mensaje = "es de noche";
            if (horaPedida <= 24 && horaPedida > 19) {
                alert("rompete otro");
            }
            break;
    } alert (mensaje);

    

}
