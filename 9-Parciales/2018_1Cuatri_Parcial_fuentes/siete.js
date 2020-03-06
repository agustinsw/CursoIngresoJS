function mostrar()
{
    var alumnoUnoNotas = prompt("Ingrese la nota del primer alumno");
    var alumnoUnoNotas = parseInt(alumnoUnoNotas);
    var alumnoUnoSexo = prompt ("Ingrese 'f' si es femenino y 'm' si es mascuino");

    var alumnoDosNotas = prompt("Ingrese la nota del segundo alumno");
    var alumnoDosNotas = parseInt(alumnoDosNotas);
    var alumnoDosSexo = prompt ("Ingrese 'f' si es femenino y 'm' si es mascuino");

    var alumnoTresNotas = prompt("Ingrese la nota del tercer alumno");
    var alumnoTresNotas = parseInt(alumnoTresNotas);
    var alumnoTresSexo = prompt ("Ingrese 'f' si es femenino y 'm' si es mascuino");

    var alumnoCuatroNotas = prompt("Ingrese la nota del cuarto alumno");
    var alumnoCuatroNotas = parseInt(alumnoCuatroNotas);
    var alumnoCuatroSexo = prompt ("Ingrese 'f' si es femenino y 'm' si es mascuino");

    var alumnoCincoNotas = prompt("Ingrese la nota del quinto alumno");
    var alumnoCincoNotas = parseInt(alumnoCincoNotas);
    var alumnoCincoSexo = prompt ("Ingrese 'f' si es femenino y 'm' si es mascuino");

    var menor = Math.min(parseInt(alumnoUnoNotas) , parseInt(alumnoDosNotas) , parseInt(alumnoTresNotas) , parseInt(alumnoCuatroNotas) , parseInt(alumnoCincoNotas));

    for (var notas = 0; notas < 3; notas++) {
        var promedioNotas = (parseInt(alumnoUnoNotas + alumnoDosNotas + alumnoTresNotas+ alumnoCuatroNotas + alumnoCincoNotas) / 5);
        var menor;
        var mensaje;

        switch(notas) {
            case 0:
                mensaje = ("el promedio de las notas es: " + promedioNotas);
                alert(mensaje);
                break;
            case 1:
                var sexoMenorNota;
                if (menor == alumnoUnoNotas) {
                        sexoMenorNota = alumnoUnoSexo;
                }else {
                    if (menor == alumnoDosNotas) {
                        sexoMenorNota = alumnoDosSexo;
                }else {
                    if (menor == alumnoTresNotas) {
                        sexoMenorNota = alumnoTresSexo;
                }else {
                    if (menor == alumnoCuatroNotas) {
                        sexoMenorNota = alumnoCuatroSexo;
                }else {
                    sexoMenorNota = alumnoCincoSexo;
                }
            }
                }
            }
                mensaje = ("La nota mas baja es: " + menor +" y el sexo es: " + sexoMenorNota);
                alert(mensaje);
                break; 
            case 2:
            var aprobados = 0;    
            for (let cantVaronesA = 0; cantVaronesA < 6; cantVaronesA++) {
                    if (alumnoUnoSexo == "m" && alumnoUnoNotas >= 6 ) {
    
                    } else{
                        if (alumnoDosSexo == "m" && alumnoDosNotas >= 6 ) {
                        }else {
                            if (alumnoTresSexo == "m" && alumnoTresNotas >= 6 ) {
                            }else {
                                if(alumnoCuatroSexo == "m" && alumnoCuatroNotas >= 6 ) {
                                } else {
                                    if (alumnoCincoSexo == "m" && alumnoCincoNotas >= 6) {
                                    }
                                }
                                
                            }
                        }
                    } aprobados = cantVaronesA;
                }alert ("La cantidad de varones aprobas es: " + aprobados);
                     
             
                 

        }
    }

}
