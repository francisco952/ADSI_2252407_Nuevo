"use strict"
/* Variables Globales */
var fechaactual = new Date();
var añoactual = fechaactual.getFullYear();
var mesactual = fechaactual.getMonth();
var diaactual = fechaactual.getDate();
var horaactual = fechaactual.getHours();
var minutosactual = fechaactual.getMinutes();

MostrarFecha();
function MostrarHora(){
    if(horaactual > 12){
        horaactual = horaactual-12;
        sufijo = 'p.m.'
    }
    else{
        var sufijo = 'a.m.'
    }
    
    if(minutosactual < 10) {
        minutosactual= "0" + minutosactual.toString;
    }
    alert("La hora es "+horaactual+":"+minutosactual+sufijo);
};
function MostrarFecha(){
    var mesese = ["Enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    var meseactual = (mesese[mesactual]);
    alert("Hoy es "+diaactual+"de "+meseactual+" del año "+añoactual);
};
/* Funcion con parametros */
var saludonavidad = "Llego la navidad"
function saludo(saludonavidad){
    var saludosencillo = "Bienvenidos";
    if(mesactual === 11){
        alert(saludosencillo +" "+ saludonavidad);
    }
    else{
        alert(saludosencillo);
    }
};
/* Mostrat el mensaje completo */
function presentacion(nombre, titulado){
    alert("Hola mi nombres es "+nombre+" y soy del titulado "+titulado);
};
/* Funcion con retorno */

function ValidarDescuento(compra){
    var total = 0;
    if(compra >= 10000){
        total = compra * .9;
    }
    else if(compra >= 5000 && compra < 9999){
        total = compra * .95;
    }
    else if (compra < 5000){
        total = compra;
    }
    else{
        total = -1;
    }
    return total;
}
function calcularDescuento(costo){
    if(costo === -1){
        alert("Ha surguido un problema")
    }
    else if(costo >= 1){
        alert("Costo total: "+ValidarDescuento(costo));
    }
};