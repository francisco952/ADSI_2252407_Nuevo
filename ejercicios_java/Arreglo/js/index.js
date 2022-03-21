class vuelos{
    constructor(horaSalida, horaLlegada, destino){
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
    }
}

let horaSalida1 = new Date (2022, 03, 18, 10, 15, 0);
let horaSalida1Str = horaSalida1.getHours().toString() + ":" + horaSalida1.getMinutes().toString();

let horaLlegada1 = new Date (2022, 03, 18, 12, 55, 0);
let horaLlegada1str = horaLlegada1.getHours().toString() + ":" + horaLlegada1.getMinutes().toString();

let horaSalida2 = new Date (2022, 04, 23, 10, 15, 0);
let horaSalida2Str = horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

let horaLlegada2 = new Date (2022, 04, 25, 15, 59, 0);
let horaLlegada2str = horaLlegada2.getHours().toString() + ":" + horaLlegada2.getMinutes().toString();

let horaSalida3 = new Date (2022, 05, 23, 10, 15, 0);
let horaSalida3Str = horaSalida3.getHours().toString() + ":" + horaSalida3.getMinutes().toString();

let horaLlegada3 = new Date (2022, 05, 26, 15, 59, 0);
let horaLlegada3str = horaLlegada3.getHours().toString() + ":" + horaLlegada3.getMinutes().toString();

var vuelo=[
    {
    "horaSalida" : horaSalida1Str,
    "horaLlegada" : horaLlegada1str,
    "destino" : "ADZ"},
    {
    "horaSalida" : horaSalida2Str,
    "horaLlegada" : horaLlegada2str,
    "destino" : "Payu"},
    {
        "horaSalida" : horaSalida3Str,
        "horaLlegada" : horaLlegada3str,
        "destino" : "Payu"}
];
/* 
console.log("Salida "+vuelo[0].horaSalida+" Llegada "+vuelo[0].horaLlegada+" Destino"+vuelo[0].destino  ) */

function mostrar(vuelo){
    let contentmain = document.getElementById('content_main');
    let contenedorsecond = document.createElement('div');
    contentmain.appendChild(contenedorsecond);
    let spansalida = document.createElement('span');
    let spanllegada = document.createElement('span');
    let spandestino = document.createElement('span');
    let textosalida = document.createTextNode(vuelo.horaSalida);
    let textollegada = document.createTextNode(vuelo.horaLlegada);
    let textodestino = document.createTextNode(vuelo.destino);
    spansalida.appendChild(textosalida);
    spanllegada.appendChild(textollegada);
    spandestino.appendChild(textodestino);
    let labeltitulolsalida = document.createElement('label');
    let labeltitulollegada = document.createElement('label');
    let labeltituloldestino = document.createElement('label');
    let textotsalida = document.createTextNode("salida");
    let textotllegada = document.createTextNode("llegada");
    let textotdestino = document.createTextNode("destino");
    labeltitulolsalida.appendChild(textotsalida);
    labeltitulollegada.appendChild(textotllegada);
    labeltituloldestino.appendChild(textotdestino);
    labeltitulolsalida.appendChild(spansalida);
    labeltitulollegada.appendChild(spanllegada);
    labeltituloldestino.appendChild(spandestino);
    contenedorsecond.appendChild(labeltitulolsalida);
    contenedorsecond.appendChild(labeltitulollegada);
    contenedorsecond.appendChild(labeltituloldestino);
}

function consolear(){
    limpiarcontenedor();
    mostrar(vuelo[0]);
    mostrar(vuelo[1]);
    mostrar(vuelo[2]);
}
function limpiarcontenedor(){
    document.getElementById('content_main').innerHTML = "";
}