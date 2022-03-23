class vuelos{
    constructor(horaSalida, horaLlegada, lugardestino, lugarsalida,estadovalor,valorvuelo, tipovuelo){
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.lugardestino = lugardestino;
        this.lugarsalida = lugarsalida;
        this.estadovalor = estadovalor;
        this.valorvuelo = valorvuelo;
        this.tipovuelo = tipovuelo;
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
    "lugardestino" : "BGT",
    "lugarsalida" : "Medellin",
    "estadovalor" : "Mas Económico",
    "valorvuelo" : "cop 375.000",
    "tipovuelo" : "Directo"},
    {
    "horaSalida" : horaSalida2Str,
    "horaLlegada" : horaLlegada2str,
    "lugardestino" : "Bogota",
    "lugarsalida" : "Neiva",
    "estadovalor" : "Mas Económico",
    "valorvuelo" : "cop 175.000",
    "tipovuelo" : "Directo"},
    {
    "horaSalida" : horaSalida3Str,
    "horaLlegada" : horaLlegada3str,
    "lugardestino" : "Payu",
    "lugarsalida" : "San Tander",
    "estadovalor" : "Mas Económico",
    "valorvuelo" : "cop 275.000",
    "tipovuelo" : "Directo"}
];

function mostrarvuelo(vuelo){
    let contentmain = document.getElementById('content_main');
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
    /* Asignacion valores */
    
    spansalida.appendChild(textosalida);
    spanllegada.appendChild(textollegada);
    spanlugardestino.appendChild(textolugardestino);
    spanlugarsalida.appendChild(textolugarsalida);
    spanestadovalor.appendChild(textoestadovalor);
    spanvalorvuelo.appendChild(textovalorlvuelo);
    spantipovuelo.appendChild(textotipovuelo);
    spanduracion.appendChild(textoduracion);
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
    document.getElementById('content_main').innerHTML = "";
}