/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var lampara = 35;
     var cantLampara = parseInt(document.getElementById("Cantidad").value);
     var precio = parseInt(lampara * cantLampara);
     var precioCdescuento;
     var marca = document.getElementById("Marca").value;
     var impuesto = precioCdescuento * 0.10;

     if (cantLampara >= 6 && precio < (120 / 1.10))
     {
         precioCdescuento = precio - (precio * 0.5);
         alert(precioCdescuento);
     } else if (cantLampara == 5 && marca == "ArgentinaLuz" )
     {
        precioCdescuento = (precio) - (precio * 0.4);
        alert(precioCdescuento);
     } else if (cantLampara == 5)
     {
        precioCdescuento = (precio) - (precio * 0.3);
        alert(precioCdescuento);
     } else if (cantLampara == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
     {
        precioCdescuento = (precio) - (precio * 0.25);
        alert(precioCdescuento);
     } else if (cantLampara == 4)
     {
        precioCdescuento = (precio) - (precio * 0.2);
        alert(precioCdescuento);
     } else if (cantLampara == 3 && marca == "ArgentinaLuz" )
     {
        precioCdescuento = (precio) - (precio * 0.15);
        alert(precioCdescuento);
     } else if (cantLampara == 3 && marca == "FelipeLamparas" )
     {
        precioCdescuento = (precio) - (precio * 0.1);
        alert(precioCdescuento);
    }  else if (cantLampara == 3 && (marca != "ArgentinaLuz" && marca != "FelipeLamparas") )
    {
       precioCdescuento = (precio) - (precio * 0.05);
       alert(precioCdescuento);
    } 
    if (precio >= (120 / 1.10))
    {
        precioCdescuento = precio - (precio * 0.5);
        precioCdescuento = precioCdescuento + impuesto;
        alert("IIBB Usted pago " + precioCdescuento + ", siendo " + impuesto + " el impuesto que se pagó.");
    }

}
