function mostrar()
{
    var numero = prompt("Ingrese un numero");
    var numero = parseInt(numero);

    while (isNaN(numero)){
        numero = prompt("Ingrese un numero valido");
        
            numero = parseInt(numero);
    }

    for (var contadorPares = 0; contadorPares <= numero; contadorPares += 2) {
        alert(contadorPares);
        if (contadorPares >= numero){
            alert("Se encontraron " + Math.round((contadorPares / 2)) + " pares");
        }

    }
//TERMINAR!



}//FIN DE LA FUNCIÓN