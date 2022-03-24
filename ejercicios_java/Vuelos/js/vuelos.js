class vuelos{
    constructor(horaSalida, horaLlegada, lugardestino, lugarsalida,estadovalor,valorvuelo, tipovuelo, aeropuerto){
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.lugardestino = lugardestino;
        this.lugarsalida = lugarsalida;
        this.estadovalor = estadovalor;
        this.valorvuelo = valorvuelo;
        this.tipovuelo = tipovuelo;
        this.aeropuerto = aeropuerto;
    }
}

let horaSalida1 = new Date (2022, 03, 18, 10, 15, 0);
let horaSalida1Str = horaSalida1.getHours().toString() + ":" + horaSalida1.getMinutes().toString();

let horaLlegada1 = new Date (2022, 03, 18, 12, 55, 0);
let horaLlegada1str = horaLlegada1.getHours().toString() + ":" + horaLlegada1.getMinutes().toString();

let tiempo1 = horaLlegada1.getHours() - horaSalida1.getHours();
let minuto1 = horaSalida1.getMinutes();
let minutos1 = horaLlegada1.getMinutes();
let minutosrestantes1 = (minutos1-minuto1);
let tiempoduracion1 = tiempo1 +"h y "+ minutosrestantes1+"m";
let aeropuerto1 = "El Dorado";
/* =================================================================================================== */

let horaSalida2 = new Date (2022, 04, 23, 10, 15, 0);
let horaSalida2Str = horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

let horaLlegada2 = new Date (2022, 04, 23, 11, 59, 0);
let horaLlegada2str = horaLlegada2.getHours().toString() + ":" + horaLlegada2.getMinutes().toString();

let tiempo2 = horaLlegada2.getHours() - horaSalida2.getHours();
let minuto2 = horaSalida2.getMinutes();
let minutos2 = horaLlegada2.getMinutes();
let minutosrestantes2 = (minutos2-minuto2);
let tiempoduracion2 = tiempo2 +"h y "+ minutosrestantes2+"m";
let aeropuerto2 = "El Contador";
/* =================================================================================================== */

let horaSalida3 = new Date (2022, 05, 23, 10, 15, 0);
let horaSalida3Str = horaSalida3.getHours().toString() + ":" + horaSalida3.getMinutes().toString();

let horaLlegada3 = new Date (2022, 05, 23, 16, 59, 0);
let horaLlegada3str = horaLlegada3.getHours().toString() + ":" + horaLlegada3.getMinutes().toString();

let tiempo3 = horaLlegada3.getHours() - horaSalida3.getHours();
let minuto3 = horaSalida3.getMinutes();
let minutos3 = horaLlegada3.getMinutes();
let minutosrestantes3 = (minutos3-minuto3);
let tiempoduracion3 = tiempo3 +"h y "+ minutosrestantes3+"m";
let aeropuerto3 = "El Dorado";
/* ================================================================================= */

var vuelo=[
    {
    "horaSalida" : horaSalida1Str,
    "horaLlegada" : horaLlegada1str,
    "lugardestino" : "BGT",
    "lugarsalida" : "Medellin",
    "estadovalor" : "Mas Económico",
    "valorvuelo" : "cop 375.000",
    "tipovuelo" : "Directo",
    "tiempodura": tiempoduracion1,
    "aeropuerto" : aeropuerto1
},
    {
    "horaSalida" : horaSalida2Str,
    "horaLlegada" : horaLlegada2str,
    "lugardestino" : "Pitalito",
    "lugarsalida" : "BGT",
    "estadovalor" : "Mas Económico",
    "valorvuelo" : "cop 200.000",
    "tipovuelo" : "Directo",
    "tiempodura": tiempoduracion2, 
    "aeropuerto" : aeropuerto2},
    {
    "horaSalida" : horaSalida3Str,
    "horaLlegada" : horaLlegada3str,
    "lugardestino" : "BGT",
    "lugarsalida" : "C.D Mexico",
    "estadovalor" : "Mas Económico",
    "valorvuelo" : "cop 700.000",
    "tipovuelo" : "Directo",
    "tiempodura": tiempoduracion3,
    "aeropuerto" : aeropuerto3}
];

function mostrarvuelo(vuelo){
    let contentmain = document.getElementById('content_precios');
    let contentsecond = document.createElement('div');
    contentsecond.setAttribute("id","cont_child");
    let lineabaja = document.createElement('div');
    contentmain.appendChild(contentsecond);
    /* Variables que se crean */
    let spansalida = document.createElement('label');
    spansalida.setAttribute("class","horasalida");
    /*  */
    let spanllegada = document.createElement('label');
    spanllegada.setAttribute("class","horallegada");
    /*  */
    let spanlugardestino = document.createElement('label');
    spanlugardestino.setAttribute("class","lugardestino");
    /*  */
    let spanlugarsalida = document.createElement('label');
    spanlugarsalida.setAttribute("class","lugarsalida");
    /*  */
    let spanestadovalor = document.createElement('label');
    spanestadovalor.setAttribute("class","estadovalor");
    /*  */
    let spanvalorvuelo = document.createElement('label');
    spanvalorvuelo.setAttribute("class","precio")
    /*  */
    let spantipovuelo = document.createElement('label');
    spantipovuelo.setAttribute("class","tipovuelo");
    /*  */
    let spanduracion = document.createElement('label');
    spanduracion.setAttribute("class","duracion");
    let tiempoduravuelo = document.createElement('label');
    tiempoduravuelo.setAttribute("class","duracionvuelo");
    let aerpuetolugar = document.createElement('label');
    aerpuetolugar.setAttribute("class","aeropuertolugar");
    /*  */
    let espacio = document.createElement('br');
    /* Valor de las variables */
    let textosalida = document.createTextNode(vuelo.horaSalida);
    let textollegada = document.createTextNode(vuelo.horaLlegada);
    let textolugardestino = document.createTextNode(vuelo.lugardestino);
    let textolugarsalida = document.createTextNode(vuelo.lugarsalida);
    let textoestadovalor = document.createTextNode(vuelo.estadovalor);
    let textovalorlvuelo = document.createTextNode(vuelo.valorvuelo);
    let textotipovuelo = document.createTextNode(vuelo.tipovuelo);
    let textoduracion = document.createTextNode("Duración");
    let textduravuelo = document.createTextNode(vuelo.tiempodura);
    let textoaeropuerto = document.createTextNode(vuelo.aeropuerto);
    /* Asignar Hijos */
    /* Asignacion contenedor */
    contentmain.appendChild(espacio)
    contentsecond.appendChild(lineabaja);
    contentsecond.appendChild(spansalida);
    contentsecond.appendChild(spanllegada);
    contentsecond.appendChild(spanlugardestino);
    contentsecond.appendChild(spanlugarsalida);
    contentsecond.appendChild(spanestadovalor);
    contentsecond.appendChild(spanvalorvuelo);
    contentsecond.appendChild(spantipovuelo);
    contentsecond.appendChild(spanduracion);
    contentsecond.appendChild(tiempoduravuelo);
    contentsecond.appendChild(aerpuetolugar);
    /* Asignacion valores */
    
    spansalida.appendChild(textosalida);
    spanllegada.appendChild(textollegada);
    spanlugardestino.appendChild(textolugardestino);
    spanlugarsalida.appendChild(textolugarsalida);
    spanestadovalor.appendChild(textoestadovalor);
    spanvalorvuelo.appendChild(textovalorlvuelo);
    spantipovuelo.appendChild(textotipovuelo);
    spanduracion.appendChild(textoduracion);
    tiempoduravuelo.appendChild(textduravuelo);
    aerpuetolugar.appendChild(textoaeropuerto);
    /* Asignacion de clases y identificadores */
    lineabaja.setAttribute("class","rayavuelo");
}
function consolear(){
    limpiarcontenedor();
    mostrarvuelo(vuelo[0]);
    mostrarvuelo(vuelo[1]);
    mostrarvuelo(vuelo[2]);
}
function limpiarcontenedor(){
    document.getElementById('content_precios').innerHTML = "";
}