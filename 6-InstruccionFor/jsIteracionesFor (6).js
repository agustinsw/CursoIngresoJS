function mostrar()
{
    var numero = prompt("Ingrese un numero");
    var numero = parseInt(numero);

    while (isNaN(numero)){
        numero = prompt("Ingrese un numero valido");
        
            numero = parseInt(numero);
    }

    for (var contador = 1; contador < numero; contador += 2) {
        alert(contador + 1);

    }
//TERMINAR!



}//FIN DE LA FUNCIÓN