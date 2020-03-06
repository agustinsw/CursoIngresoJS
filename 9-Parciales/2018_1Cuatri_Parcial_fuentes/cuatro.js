function mostrar()
{
    var numeroUno = prompt("Ingrese el primer numero");
    numeroUno = parseInt(numeroUno);
    var numeroDos = prompt("Ingrese el segundo numero");
    numeroDos = parseInt(numeroDos);

    var sumaDeNumeros = parseInt(numeroUno + numeroDos);

    if ((numeroUno == numeroDos) || ((numeroDos + numeroUno) > 10)) {
        if(numeroUno == numeroDos) {
            alert("Sus numeros son iguales y suman: " + sumaDeNumeros);
        }else {alert("la suma es: " + sumaDeNumeros + " y supero el 10");}
    } else {
        if(numeroUno > numeroDos){
            var restaDeNumros = parseInt(numeroUno - numeroDos);
            alert(restaDeNumros);
        }else{alert(sumaDeNumeros);}
    }
}
